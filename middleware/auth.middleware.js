import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/users.model.js";

export const Authorize = async (req, res, next) => {
    try {
        let token
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1];
        }
        if (!token) return res.status(401).json({ message: "Unauthorized: No token provided" });
        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.userId).select('-password');
        if (!user) return res.status(401).json({ message: "Unauthorized: User not found" });

        req.user = user;
        
        next(error);
    } catch (error) {
        res.status(401).json({ message: "Unauthorized", error: error.message });
    }
}