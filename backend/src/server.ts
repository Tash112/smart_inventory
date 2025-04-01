import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./routers/userRoutes";
import dashboardRoutes from "./routers/dashboardRoutes";
import logger from "./utils/logger";
import { connectDB } from "./config/database";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is up and running!");
  logger.info("Root endpoint accessed.");
});

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      const message = `✅ Server is running on port ${port}`;
      logger.info(message);
      console.log(message);
    });
  })
  .catch((err: any) => {
    const errorMessage = `❌ Failed to connect to the database: ${err.message}`;
    logger.error(errorMessage);
    console.error(errorMessage);
  });
