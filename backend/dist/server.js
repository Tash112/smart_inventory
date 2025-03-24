"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
// Create an instance of the Express app
const app = (0, express_1.default)();
// Test route
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});
// Get the port from the environment variable, or default to 5000
const port = process.env.PORT;
// Start the server 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
