"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./routers/userRoutes"));
const dashboardRoutes_1 = __importDefault(require("./routers/dashboardRoutes"));
const logger_1 = __importDefault(require("./utils/logger"));
const database_1 = require("./config/database");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use("/api/dashboard", dashboardRoutes_1.default);
app.use("/api/users", userRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Server is up and running!");
    logger_1.default.info("Root endpoint accessed.");
});
const port = process.env.PORT || 5000;
(0, database_1.connectDB)()
    .then(() => {
    app.listen(port, () => {
        const message = `✅ Server is running on port ${port}`;
        logger_1.default.info(message);
        console.log(message);
    });
})
    .catch((err) => {
    const errorMessage = `❌ Failed to connect to the database: ${err.message}`;
    logger_1.default.error(errorMessage);
    console.error(errorMessage);
});
