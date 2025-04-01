"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("../utils/logger"));
dotenv_1.default.config();
const authMiddleware = (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) {
            logger_1.default.warn("Unauthorized access attempt");
            res.status(401).json({ message: "Access Denied: No token provided" });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user data to request
        next(); // ✅ Always call next() to proceed
    }
    catch (error) {
        logger_1.default.error("Invalid token");
        res.status(403).json({ message: "Invalid Token" });
        return;
    }
};
exports.default = authMiddleware;
