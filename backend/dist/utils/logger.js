"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
// Define log format
const logFormat = winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
}));
// Create a logger instance
const logger = winston_1.default.createLogger({
    level: "info", // Default log level
    format: logFormat,
    transports: [
        new winston_1.default.transports.Console(),
        // Log errors to a file
        new winston_1.default.transports.File({
            filename: path_1.default.join(__dirname, "../../logs/error.log"),
            level: "error",
        }),
        // Log all events to a file
        new winston_1.default.transports.File({
            filename: path_1.default.join(__dirname, "../../logs/combined.log"),
        }),
    ],
});
// Enable console logging for development
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple(),
    }));
}
exports.default = logger;
