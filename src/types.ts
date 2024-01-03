import { PostTable } from "./posts/posts.entity"
import { CommentTable } from "./comments/comments.entity"

export interface Database {
  posts: PostTable
  comments: CommentTable
}
