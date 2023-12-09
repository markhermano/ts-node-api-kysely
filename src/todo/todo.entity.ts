import { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely"

export interface TodosTable {
  id: Generated<number>
  title: string
  description: string
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined>
}

export type Todo = Selectable<TodosTable>
export type NewTodo = Insertable<TodosTable>
export type TodoUpdate = Updateable<TodosTable>
