import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("comments")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("author", "text", (col) => col.notNull())
    .addColumn("content", "text")
    .addColumn("post_id", "integer", (col) =>
      col.references("posts.id").onDelete("cascade").notNull()
    )
    .addColumn("created_at", "text", (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .execute()

  await db.schema
    .createIndex("comment_post_id_index")
    .on("comments")
    .column("post_id")
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("posts").execute()
  await db.schema.dropIndex("comment_post_id_index").execute()
}
