import { body } from "express-validator";

export const userValidationRules = {
  registerUser: [
    body("id").isString().withMessage("ID must be a string."),
    body("name").notEmpty().withMessage("Name is required."),
    body("email").isEmail().withMessage("Invalid email format."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long."),
    body("phone")
      .optional()
      .isMobilePhone("any")
      .withMessage("Invalid phone number."),
    body("role")
      .optional()
      .isIn(["user", "admin"])
      .withMessage("Role must be either 'user' or 'admin'."),
    body("status")
      .optional()
      .isString()
      .withMessage("Status must be a string."),
    body("address")
      .optional()
      .isString()
      .withMessage("Address must be a string."),
    body("profilePicture")
      .optional()
      .isString()
      .withMessage("Profile picture must be a string."),
    body("lastLogin")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("Last login must be a valid date."),
  ],

  loginUser: [
    body("email").isEmail().withMessage("Invalid email format."),
    body("password").notEmpty().withMessage("Password is required."),
  ],

  updateUser: [
    body("name").optional().notEmpty().withMessage("Name cannot be empty."),
    body("email")
      .optional()
      .isEmail()
      .withMessage("Invalid email format."),
    body("phone")
      .optional()
      .isMobilePhone("any")
      .withMessage("Invalid phone number."),
    body("role")
      .optional()
      .isIn(["user", "admin"])
      .withMessage("Role must be either 'user' or 'admin'."),
    body("status")
      .optional()
      .isString()
      .withMessage("Status must be a string."),
    body("address")
      .optional()
      .isString()
      .withMessage("Address must be a string."),
    body("profilePicture")
      .optional()
      .isString()
      .withMessage("Profile picture must be a string."),
    body("lastLogin")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("Last login must be a valid date."),
  ],
};
