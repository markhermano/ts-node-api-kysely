import { db } from "../../config/db/database"
import { NewComment, Comment, CommentUpdate } from "./comments.entity"

export const createComment = async (insertProp: NewComment): Promise<Comment | undefined> => {
  return await db.insertInto("comments")
    .values(insertProp)
    .returning(["id", "author", "content", "created_at", "post_id"])
    .executeTakeFirst()
}

export const findComments = async (): Promise<Comment[]> => {
  return await db.selectFrom("comments")
    .selectAll()
    .execute()
}

export const findComment = async (id: number): Promise<Comment | undefined> => {
  return await db.selectFrom("comments")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst()
}

export const updateComment = async (id: number, updateProp: CommentUpdate): Promise<Comment | undefined> => {
  return await db.updateTable("comments")
    .set(updateProp)
    .where("id", "=", id)
    .returning(["id", "author", "content", "created_at", "post_id"])
    .executeTakeFirst()
}

export const deleteComment = async (id: number): Promise<Comment | undefined> => {
  return await db.deleteFrom("comments")
    .where("id", "=", id)
    .returning(["id", "author", "content", "created_at", "post_id"])
    .executeTakeFirst()
}
