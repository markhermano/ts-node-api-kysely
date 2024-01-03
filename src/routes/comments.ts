import { Router } from "express"
import { create, destroy, findAll, findOne, update } from "../comments/comments.controller"

const router = Router()

router.post("/comments", create)
router.get("/comments", findAll)
router.get("/comments/:id", findOne)
router.patch("/comments/:id", update)
router.delete("/comments/:id", destroy)

export default router
