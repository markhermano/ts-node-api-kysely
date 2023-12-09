import { Request, Response } from "express"
import { NewTodo, TodoUpdate } from "./todo.entity"
import { createTodo, deleteTodo, findTodo, findTodos, updateTodo } from "./todos.service"


export const create = async (req: Request, res: Response) => {
  const newTodoProps: NewTodo = req.body
  const newTodo = await createTodo(newTodoProps)
  
  return res.status(201).json(newTodo)
}

export const findAll = async (_req: Request, res: Response) => {
  const todos = await findTodos()
  return res.json(todos)
}

export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params
  const todo = await findTodo(Number(id))

  if (todo) {
    return res.json(todo)
  } else {
    return res.status(404).json()
  }
}

export const update = async (req: Request, res: Response) => {
  const { id } = req.params
  const todoUpdateProps: TodoUpdate = req.body
  const updatedTodo = await updateTodo(Number(id), todoUpdateProps)
  console.log(updateTodo)
  if (updatedTodo) {
    return res.json(updatedTodo)
  } else {
    return res.status(404).json()
  }
}

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params
  const deletedTodo = await deleteTodo(Number(id))

  if (deletedTodo) {
    return res.json(deletedTodo)
  } else {
    return res.status(404).json()
  }
}
