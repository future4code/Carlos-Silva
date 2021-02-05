import express from "express"
import { create } from "../postController"

export const postRouter = express.Router()

postRouter.post("/create", create )

postRouter.get("/:id", )