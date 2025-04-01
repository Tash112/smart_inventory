import sql from "mssql";
import dotenv from "dotenv";
import logger from "../utils/logger"; // Import logger

dotenv.config();

// Database configuration
const dbConfig: sql.config = {
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_DATABASE!,
  server: process.env.DB_SERVER!,
  port: parseInt(process.env.DB_PORT!) || 1433, // Default SQL Server port
  options: {
    encrypt: false, // Change to true if using Azure
    enableArithAbort: true,
    trustServerCertificate: true, // For local dev
  },
};

// Create a function to connect to the database
const connectDB = async () => {
  try {
    const pool = await sql.connect(dbConfig);
    const message = "✅ Database connected successfully";
    logger.info(message);
    console.log(message);
    return pool;
  } catch (error: any) {
    const errorMessage = `❌ Database connection failed: ${error.message}`;
    logger.error(errorMessage);
    console.error(errorMessage);
    throw error;
  }
};

export { connectDB, sql };
