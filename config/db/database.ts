import SQLite from "better-sqlite3"
import { Kysely, ParseJSONResultsPlugin, SqliteDialect } from "kysely"
import { Database } from "../../src/types"

export const dialect = new SqliteDialect({
  database: new SQLite(String(process.env.DB_NAME))
})

export const db = new Kysely<Database>({
  dialect,
  plugins: [new ParseJSONResultsPlugin],
  log(event) {
    if (event.level === "query") {
      console.log(event.query.sql)
      console.log(event.query.parameters)
    }
  }
})
