import express from "express"
import { PORT } from "./config/env.js"
import userRouter from "./route/user.route.js"
import authRouter from "./route/auth.route.js"
import subscriptionRouter from "./route/subscription.route.js"
import connectToDatabase from "./databse/mongodb.js"
import errorMiddleware from "./middleware/error.middleware.js"
import cookieParser from "cookie-parser"

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("welcome to the Subscription Tracker api")
})

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)

app.use(errorMiddleware)

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectToDatabase()
})

export default app;