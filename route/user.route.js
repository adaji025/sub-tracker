import { Router } from "express";

const userRouter = Router();
// Define your user routes here

userRouter.post("/", (req, res) => res.send({ title: "CREATE a user" }));
userRouter.get("/", (req, res) => res.send({ title: "GETs all users" }));
userRouter.get("/:id", (req, res) => res.send({ title: "GET a user" }));
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE a user" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE a user" }));

export default userRouter;