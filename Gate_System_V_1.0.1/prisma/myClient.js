const wnConfig = require('../src/electronUtils/storage')

let PROVIDER = wnConfig('DB_PROVIDER') || process.env.DB_PROVIDER;
let DB_URL = wnConfig('DATABASE_URL') || process.env.DATABASE_URL;

console.log(DB_URL,"66666666666666666666666666666666666666666666666")

PROVIDER = (DB_URL==="") ? "SQLITE" : PROVIDER;
// DB_URL   = (DB_URL==="") ? "sqlite:///C:/database.sqlite" : DB_URL;
DB_URL   = (DB_URL==="") ? "file:/Users/database.sqlite" : DB_URL;
let prisma = null;

// const { PrismaClient } = require("../prisma/generated/mysql-client");
DB_OBJ = {datasources: {db: {url: DB_URL,},},}


if (PROVIDER === "MYSQL") {
    const { PrismaClient } = require("../prisma/generated/mysql-client");
    prisma = new PrismaClient(DB_OBJ);
}
else if (PROVIDER === "ORACLE") {
    const { PrismaClient } = require("../prisma/generated/oracle-client");
    prisma = new PrismaClient(DB_OBJ);
}
else if (PROVIDER === "MSSQL") {
    const { PrismaClient } = require("../prisma/generated/mssql-client");
    prisma = new PrismaClient(DB_OBJ);
}
else if (PROVIDER === "POSTGRESQL") {
    const { PrismaClient } = require("../prisma/generated/postgresql-client");
    prisma = new PrismaClient(DB_OBJ);
}
else {
    const { PrismaClient } = require("../prisma/generated/sqlite-client");
    prisma = new PrismaClient(DB_OBJ);
}


module.exports = {
    prisma
}