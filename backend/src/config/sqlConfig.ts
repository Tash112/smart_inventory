import mssql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();
console.log("DB_SERVER:", process.env.DB_SERVER); // Added for debugging
dotenv.config();
console.log("DB_SERVER:", process.env.DB_SERVER); // Added for debugging


export const sqlConfig = {
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  server: process.env.DB_SERVER as string, // Corrected line

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

async function testConnection() {
  try {
    // Establish a connection
    await mssql.connect(sqlConfig);
    console.log("Connection was made successfully.");
  } catch (error) {
    console.error("Connection error:", error);
  }
}

testConnection();
