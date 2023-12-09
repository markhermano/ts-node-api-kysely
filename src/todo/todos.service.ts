import { sql } from "kysely"
import { db } from "../database"
import { NewTodo, Todo, TodoUpdate } from "./todo.entity"

export const createTodo = async (insertProp: NewTodo): Promise<Todo | undefined> => {
  return await db.insertInto("todos")
    .values(insertProp)
    .returning(["id", "title", "description", "created_at", "updated_at"])
    .executeTakeFirst()
}

export const findTodos = async (): Promise<Todo[]> => {
  return await db.selectFrom("todos")
    .selectAll()
    .execute()
}

export const findTodo = async (id: number): Promise<Todo | undefined> => {
  return await db.selectFrom("todos")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst()
}

export const updateTodo = async (id: number, updateProp: TodoUpdate): Promise<Todo | undefined> => {
  return await db.updateTable("todos")
    .set({ ...updateProp, updated_at: sql`CURRENT_TIMESTAMP`})
    .where("id", "=", id)
    .returning(["id", "title", "description", "created_at", "updated_at"])
    .executeTakeFirst()
}

export const deleteTodo = async (id: number): Promise<Todo | undefined> => {
  return await db.deleteFrom("todos")
    .where("id", "=", id)
    .returning(["id", "title", "description", "created_at", "updated_at"])
    .executeTakeFirst()
}
