import { Router } from "express"
import { create, destroy, findAll, findOne, update } from "./todo/todos.controller"

const router = Router()

router.get("/", (_req, res) => res.json("Hello World!"))

router.post("/todos", create)
router.get("/todos", findAll)
router.get("/todos/:id", findOne)
router.patch("/todos/:id", update)
router.delete("/todos/:id", destroy)

export default router
