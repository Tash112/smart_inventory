import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import logger from "../utils/logger";

dotenv.config();

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      logger.warn("Unauthorized access attempt");
      res.status(401).json({ message: "Access Denied: No token provided" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = decoded; // Attach user data to request

    next(); // ✅ Always call next() to proceed
  } catch (error) {
    logger.error("Invalid token");
    res.status(403).json({ message: "Invalid Token" });
    return;
  }
};

export default authMiddleware;
