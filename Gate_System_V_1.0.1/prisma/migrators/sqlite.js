const sqlite3 = require('sqlite3');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

async function createDatabaseIfNotExistsAndMigrate(databasePath) {
    const db = new sqlite3.Database(databasePath);
    try {
        // Create the migration table if it does not exist
        await db.run(`CREATE TABLE IF NOT EXISTS _prisma_migrations (
            id TEXT NOT NULL,
            checksum TEXT NOT NULL,
            finished_at DATETIME,
            migration_name TEXT NOT NULL,
            logs TEXT,
            rolled_back_at DATETIME,
            started_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            applied_steps_count INTEGER NOT NULL DEFAULT 0,
            PRIMARY KEY (id)
        );`);

        console.log(`Table '_prisma_migrations' created successfully`);

        // Load migration files and sort them by version number
        const migrationDir = path.join(__dirname, '..', 'migrations-sqlite');
        const migrationDirs = fs.readdirSync(migrationDir, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));

        const migrationFiles = migrationDirs.map(dirent => {
            const migrationPath = path.join(migrationDir, dirent.name, 'migration.sql');
            const migrationSql = fs.readFileSync(migrationPath, { encoding: 'utf8' });
            return { name: dirent.name, sql: migrationSql };
        });

        // disable foreign key checks
        await db.run('PRAGMA foreign_keys = OFF');
        await db.run('BEGIN TRANSACTION');

        // Check that all migrations are recorded in the database
        const rows = await db.all('SELECT `migration_name` FROM `_prisma_migrations` ORDER BY `migration_name` ASC');
        console.log(rows);


        let rowsArray = Array.from(rows);
        let recordedMigrations = rowsArray.map(row => row.migration_name);

        const lastRecordedMigration = recordedMigrations.length > 0 ? recordedMigrations[recordedMigrations.length - 1] : "00000000000000_init";
        const lastRecordedMigrationVersion = getVersionFromMigrationName(lastRecordedMigration);


        // Check if there are any migrations in DB that are not in the migration files
        if (recordedMigrations.length > migrationFiles.length) {
            throw new Error('Please Upgrade the Software');
        }
        // Check if any recorded migrations are missing from the migration files
        const firstMissingMigrationIndex = migrationFiles.findIndex(migration => migration.name === lastRecordedMigration || !recordedMigrations.includes(migration.name));
        if (firstMissingMigrationIndex !== -1) {
            const firstMissingMigrationIndexVersion = getVersionFromMigrationName(migrationFiles[firstMissingMigrationIndex].name);
            if (firstMissingMigrationIndexVersion < lastRecordedMigrationVersion) {
                throw new Error(`Recorded migration '${lastRecordedMigration}' is missing from the migration files`);
            }
        }

        const unrecordedMigrations = migrationFiles.filter(migration => getVersionFromMigrationName(migration.name) > lastRecordedMigrationVersion);

        console.log(`Applying ${unrecordedMigrations.length} new migration(s)`);

        for (const migration of unrecordedMigrations) {
            console.log(`Applying migration ${ migration.name }`);
            try {
                await db.run(migration.sql);
                A = await db.run(`INSERT INTO '_prisma_migrations'('id', 'checksum', 'finished_at', 'migration_name', 'logs', 'rolled_back_at', 'started_at', 'applied_steps_count') VALUES(?, ?, ?, ?, ?, ?, ?, ?)`, [
                    generateRandomId(),
                    generateRandomChecksum(migration.sql),
                    new Date().toISOString(),
                    migration.name,
                    null,
                    null,
                    new Date().toISOString(),
                    1,
                ]);
            } catch (error) {
                console.error(`Error applying migration ${ migration.name }: ${ error }`);
                return;
            }
        }

        console.log("All migrations have been applied successfully!");

        const defaultConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "../", "default.json")));
        for (const [index, obj] of Object.entries(defaultConfig)) {
            if (obj.type === "table" && obj.name !== "_prisma_migrations") {
                const tableName = obj.name;
                const tableData = obj.data;
                for (const rowData of tableData) {
                    const columns = Object.keys(rowData);
                    const values = Object.values(rowData);
                    const columnsString = columns.join(", ");
                    const placeholders = values.map(() => "?").join(", ");
                    const updateString = columns.map(column => `${column} = excluded.${column}`).join(", ");
                    const query = `INSERT INTO ${tableName} (${columnsString}) VALUES (${placeholders}) ON CONFLICT DO UPDATE SET ${updateString}`;
                    await db.run(query, values);
                }
            }
        }

        await db.run('COMMIT');
        await db.run('PRAGMA foreign_keys = ON');
    } catch (e) {
        // commit
        console.error(e);
        // Rollback the transaction if there was an error
        await db.run('COMMIT');
        return false;
    }
}


function getVersionFromMigrationName(name) {
    return parseInt(name.match(/^(\d+)_/)[1]);
}

function generateRandomId() {
    // Generate a random UUID
    return Math.floor(Math.random() * 1e18).toString(36) + '-' + Math.floor(Math.random() * 1e12).toString(36);
}

function generateRandomChecksum(sql) {
    // Generate a checksum based on the migration's SQL code
    return crypto.createHash('md5').update(sql).digest('hex');
}

(async () => {
    let test = await createDatabaseIfNotExistsAndMigrate(path.join(__dirname, '..', 'db.sqlite'));
    console.log(test);
})();

module.exports = createDatabaseIfNotExistsAndMigrate;