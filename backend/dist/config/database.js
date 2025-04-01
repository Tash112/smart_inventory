"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = exports.connectDB = void 0;
const mssql_1 = __importDefault(require("mssql"));
exports.sql = mssql_1.default;
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("../utils/logger")); // Import logger
dotenv_1.default.config();
// Database configuration
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT) || 1433, // Default SQL Server port
    options: {
        encrypt: false, // Change to true if using Azure
        enableArithAbort: true,
        trustServerCertificate: true, // For local dev
    },
};
// Create a function to connect to the database
const connectDB = async () => {
    try {
        const pool = await mssql_1.default.connect(dbConfig);
        const message = "✅ Database connected successfully";
        logger_1.default.info(message);
        console.log(message);
        return pool;
    }
    catch (error) {
        const errorMessage = `❌ Database connection failed: ${error.message}`;
        logger_1.default.error(errorMessage);
        console.error(errorMessage);
        throw error;
    }
};
exports.connectDB = connectDB;
