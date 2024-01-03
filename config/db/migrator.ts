import * as path from "path"
import { promises as fs } from "fs"
import { Kysely, Migrator, FileMigrationProvider, SqliteDialect } from "kysely"
import SQLite from "better-sqlite3"
import { run } from "kysely-migration-cli"
import { fileURLToPath } from "url"
import "dotenv/config"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Kysely<any>({ 
  dialect: new SqliteDialect({
    database: new SQLite(String(process.env.DB_NAME))
  })
})

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(__dirname, "./migrations")
    
  }),
})

run(db, migrator, "./db/migrations")
