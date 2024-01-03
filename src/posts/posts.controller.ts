import { Request, Response } from "express"
import { NewPost, PostUpdate } from "./posts.entity"
import { createPost, deletePost, findPost, findPosts, updatePost } from "./posts.service"


export const create = async (req: Request, res: Response) => {
  const newPostProps: NewPost = req.body
  const newPost = await createPost(newPostProps)
  
  return res.status(201).json(newPost)
}

export const findAll = async (_req: Request, res: Response) => {
  const posts = await findPosts()
  return res.json(posts)
}

export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params
  const post = await findPost(Number(id))

  if (post) {
    return res.json(post)
  } else {
    return res.status(404).json()
  }
}

export const update = async (req: Request, res: Response) => {
  const { id } = req.params
  const postUpdateProps: PostUpdate = req.body
  const updatedPost = await updatePost(Number(id), postUpdateProps)

  if (updatedPost) {
    return res.json(updatedPost)
  } else {
    return res.status(404).json()
  }
}

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params
  const deletedPost = await deletePost(Number(id))

  if (deletedPost) {
    return res.json(deletedPost)
  } else {
    return res.status(404).json()
  }
}
