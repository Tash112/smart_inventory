"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationRules = void 0;
const express_validator_1 = require("express-validator");
exports.userValidationRules = {
    registerUser: [
        (0, express_validator_1.body)("id").isString().withMessage("ID must be a string."),
        (0, express_validator_1.body)("name").notEmpty().withMessage("Name is required."),
        (0, express_validator_1.body)("email").isEmail().withMessage("Invalid email format."),
        (0, express_validator_1.body)("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long."),
        (0, express_validator_1.body)("phone")
            .optional()
            .isMobilePhone("any")
            .withMessage("Invalid phone number."),
        (0, express_validator_1.body)("role")
            .optional()
            .isIn(["user", "admin"])
            .withMessage("Role must be either 'user' or 'admin'."),
        (0, express_validator_1.body)("status")
            .optional()
            .isString()
            .withMessage("Status must be a string."),
        (0, express_validator_1.body)("address")
            .optional()
            .isString()
            .withMessage("Address must be a string."),
        (0, express_validator_1.body)("profilePicture")
            .optional()
            .isString()
            .withMessage("Profile picture must be a string."),
        (0, express_validator_1.body)("lastLogin")
            .optional()
            .isISO8601()
            .toDate()
            .withMessage("Last login must be a valid date."),
    ],
    loginUser: [
        (0, express_validator_1.body)("email").isEmail().withMessage("Invalid email format."),
        (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required."),
    ],
    updateUser: [
        (0, express_validator_1.body)("name").optional().notEmpty().withMessage("Name cannot be empty."),
        (0, express_validator_1.body)("email")
            .optional()
            .isEmail()
            .withMessage("Invalid email format."),
        (0, express_validator_1.body)("phone")
            .optional()
            .isMobilePhone("any")
            .withMessage("Invalid phone number."),
        (0, express_validator_1.body)("role")
            .optional()
            .isIn(["user", "admin"])
            .withMessage("Role must be either 'user' or 'admin'."),
        (0, express_validator_1.body)("status")
            .optional()
            .isString()
            .withMessage("Status must be a string."),
        (0, express_validator_1.body)("address")
            .optional()
            .isString()
            .withMessage("Address must be a string."),
        (0, express_validator_1.body)("profilePicture")
            .optional()
            .isString()
            .withMessage("Profile picture must be a string."),
        (0, express_validator_1.body)("lastLogin")
            .optional()
            .isISO8601()
            .toDate()
            .withMessage("Last login must be a valid date."),
    ],
};
