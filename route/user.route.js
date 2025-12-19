import { Router } from "express";
import { getUser, getUsers } from "../controllers/users.controller.js";

const userRouter = Router();
// Define your user routes here

userRouter.post("/", (req, res) => res.send({ title: "CREATE a user" }));
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE a user" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE a user" }));

export default userRouter;