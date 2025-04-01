"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = express_1.default.Router();
const userController = new userController_1.UserController();
// Wrapper function to handle async errors
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
// Public routes
router.post("/register", asyncHandler((req, res, next) => userController.createUser(req, res)));
router.post("/login", asyncHandler((req, res, next) => userController.loginUser(req, res)));
// Protected routes
router.get("/", authMiddleware_1.default, asyncHandler((req, res, next) => userController.getAllUsers(req, res)));
router.get("/me", authMiddleware_1.default, asyncHandler((req, res, next) => userController.getLoggedInUser(req, res)));
router.get("/:id", authMiddleware_1.default, asyncHandler((req, res, next) => userController.getUserById(req, res)));
router.put("/:id", authMiddleware_1.default, asyncHandler((req, res, next) => userController.updateUser(req, res)));
router.delete("/:id", authMiddleware_1.default, asyncHandler((req, res, next) => userController.deleteUser(req, res)));
exports.default = router;
