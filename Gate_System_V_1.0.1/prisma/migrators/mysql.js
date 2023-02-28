const mysql = require('mysql2/promise')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto');

async function createDatabaseIfNotExistsAndMigrate(host, user, password, databaseName) {
    // Create a connection to the MySQL server
    let pool;
    let connection;
    try {
        pool = mysql.createPool({
            host: host,
            user: user,
            password: password,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            multipleStatements: true
        });
        connection = await pool.getConnection();

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\``);
        // console.log(`Database '${databaseName}' created successfully`);

        await connection.query(`USE \`${databaseName}\``);

        // Create the migration table if it does not exist
        await connection.query(`CREATE TABLE IF NOT EXISTS _prisma_migrations (
            id varchar(36) NOT NULL,
            checksum varchar(64) NOT NULL,
            finished_at datetime(3),
            migration_name varchar(255) NOT NULL,
            logs text,
            rolled_back_at datetime(3),
            started_at datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
            applied_steps_count int unsigned NOT NULL DEFAULT 0,
            PRIMARY KEY (id)
        );`);
        // console.log(`Table 'Prisma_Migration' created successfully`);

    } catch (e) {
        console.error(e);
        return false;
    }

    try {
        // Load migration files and sort them by version number
        const migrationDir = path.join(__dirname, '..', 'migrations-mysql');
        const migrationDirs = fs.readdirSync(migrationDir, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));

        const migrationFiles = migrationDirs.map(dirent => {
            const migrationPath = path.join(migrationDir, dirent.name, 'migration.sql');
            const migrationSql = fs.readFileSync(migrationPath, { encoding: 'utf8' });
            return { name: dirent.name, sql: migrationSql };
        });

        // disable foreign key checks
        await connection.query('SET FOREIGN_KEY_CHECKS = 0');
        await connection.query('SET autocommit = 0');
        // Start a transaction so that the migration table is not updated if any of the migrations fail
        await connection.beginTransaction();

        // Check that all migrations are recorded in the database
        const rows = await connection.query('SELECT `migration_name` FROM `_prisma_migrations` ORDER BY `migration_name` ASC');
        const recordedMigrations = rows[0].map(row => row.migration_name);

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
            console.log(`Applying migration ${migration.name}`);
            await connection.query(migration.sql);
            await connection.query('INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [
                generateRandomId(),
                await generateChecksum(migration.sql),
                new Date(),
                migration.name,
                null,
                null,
                new Date(),
                1,
            ]);
        }
        console.log('All Migrations applied successfully');

        const defaultConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "../", 'default.json')));
        for (const [index, obj] of Object.entries(defaultConfig)) {
            if (obj.type === "table" && obj.name!='_prisma_migrations') {
                const tableName = obj.name;
                const tableData = obj.data;
                for (const rowData of tableData) {
                    // insert or update rowData into tableName table
                    const columns = Object.keys(rowData);
                    const values = Object.values(rowData);
                    const columnsString = columns.join(", ");
                    const valuesString = values.map(() => "?").join(", ");
                    const updateString = columns.map(column => `${column} = ?`).join(", ");
                    const query = `INSERT INTO ${tableName} (${columnsString}) VALUES (${valuesString}) ON DUPLICATE KEY UPDATE ${updateString}`;
                    connection.query(query, [...values, ...values]);
                }
            }
        }

        await connection.commit();
        return true;

    } catch (e) {
        console.error(e);
        await connection.rollback();
        return false;
    } finally {
        await connection.release();
        await pool.end();
    }
}

function getVersionFromMigrationName(name) {
    return parseInt(name.match(/^(\d+)_/)[1]);
}

async function generateChecksum(str) {
    const hash = crypto.createHash('sha256');
    hash.update(str);
    return hash.digest('hex');
}

function generateRandomId() {
    return require('crypto').randomBytes(16).toString('hex');
}



// (async () => {
//     let test = await createDatabaseIfNotExistsAndMigrate("141.148.200.98", "root", "Hps202132@", "test_hc");
//     console.log(test);
// })();

module.exports = createDatabaseIfNotExistsAndMigrate;