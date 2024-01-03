import { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely"

export interface PostTable {
  id: Generated<number>
  title: string
  content: string
  created_at: ColumnType<Date, string | undefined, never>
}

export type Post = Selectable<PostTable>
export type NewPost = Insertable<PostTable>
export type PostUpdate = Updateable<PostTable>
