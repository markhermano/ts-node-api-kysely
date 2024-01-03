import { Request, Response } from "express"
import { NewComment, CommentUpdate } from "./comments.entity"
import { createComment, deleteComment, findComment, findComments, updateComment } from "./comments.service"


export const create = async (req: Request, res: Response) => {
  const newCommentProps: NewComment = req.body
  const newCommment = await createComment(newCommentProps)

  return res.status(201).json(newCommment)
}

export const findAll = async (_req: Request, res: Response) => {
  const posts = await findComments()
  return res.json(posts)
}

export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params
  const post = await findComment(Number(id))

  if (post) {
    return res.json(post)
  } else {
    return res.status(404).json()
  }
}

export const update = async (req: Request, res: Response) => {
  const { id } = req.params
  const postUpdateProps: CommentUpdate = req.body
  const updatedPost = await updateComment(Number(id), postUpdateProps)

  if (updatedPost) {
    return res.json(updatedPost)
  } else {
    return res.status(404).json()
  }
}

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params
  const deletedPost = await deleteComment(Number(id))

  if (deletedPost) {
    return res.json(deletedPost)
  } else {
    return res.status(404).json()
  }
}
