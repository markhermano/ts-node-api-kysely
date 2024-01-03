import { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely"

export interface CommentTable {
  id: Generated<number>
  author: string
  content: string
  post_id: number
  created_at: ColumnType<Date, string | undefined, never>
}

export type Comment = Selectable<CommentTable>
export type NewComment = Insertable<CommentTable>
export type CommentUpdate = Updateable<CommentTable>
