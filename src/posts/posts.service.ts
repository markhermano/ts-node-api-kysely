import { db } from "../../config/db/database"
import { NewPost, Post, PostUpdate } from "./posts.entity"
import { jsonArrayFrom } from 'kysely/helpers/sqlite'

export const createPost = async (insertProp: NewPost): Promise<Post | undefined> => {
  return await db.insertInto("posts")
    .values(insertProp)
    .returning(["id", "title", "content", "created_at"])
    .executeTakeFirst()
}

export const findPosts = async (): Promise<Post[]> => {
  return await db.selectFrom("posts")
    .selectAll()
    .execute()
}

export const findPost = async (id: number): Promise<Post | undefined> => {
  return await db.selectFrom("posts")
    .selectAll()
    .where("id", "=", id)
    .select((eb) => [
      "id",
      jsonArrayFrom(
        eb.selectFrom("comments")
          .select(["comments.id", "comments.content", "comments.author"])
          .whereRef("comments.post_id", "=", "posts.id")
          .orderBy("comments.created_at desc")
      ).as("comments") 
    ])
    .executeTakeFirst()
}

export const updatePost = async (id: number, updateProp: PostUpdate): Promise<Post | undefined> => {
  return await db.updateTable("posts")
    .set(updateProp)
    .where("id", "=", id)
    .returning(["id", "title", "content", "created_at"])
    .executeTakeFirst()
}

export const deletePost = async (id: number): Promise<Post | undefined> => {
  return await db.deleteFrom("posts")
    .where("id", "=", id)
    .returning(["id", "title", "content", "created_at"])
    .executeTakeFirst()
}
