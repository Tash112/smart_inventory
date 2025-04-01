import express, { Request, Response, NextFunction } from "express";
import { UserController } from "../controllers/userController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();
const userController = new UserController();

// Wrapper function to handle async errors
const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

// Public routes
router.post("/register", asyncHandler((req, res, next) => userController.createUser(req, res)));
router.post("/login", asyncHandler((req, res, next) => userController.loginUser(req, res)));

// Protected routes
router.get("/", authMiddleware, asyncHandler((req, res, next) => userController.getAllUsers(req, res)));
router.get("/me", authMiddleware, asyncHandler((req, res, next) => userController.getLoggedInUser(req, res)));
router.get("/:id", authMiddleware, asyncHandler((req, res, next) => userController.getUserById(req, res)));
router.put("/:id", authMiddleware, asyncHandler((req, res, next) => userController.updateUser(req, res)));
router.delete("/:id", authMiddleware, asyncHandler((req, res, next) => userController.deleteUser(req, res)));

export default router;
