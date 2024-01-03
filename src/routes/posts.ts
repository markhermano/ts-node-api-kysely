import { Router } from "express"
import { create, destroy, findAll, findOne, update } from "../posts/posts.controller"

const router = Router()

router.post("/posts", create)
router.get("/posts", findAll)
router.get("/posts/:id", findOne)
router.patch("/posts/:id", update)
router.delete("/posts/:id", destroy)

export default router
