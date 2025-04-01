import { Request, Response } from "express";
import logger from "../utils/logger";
import { successResponse, errorResponse, notFoundResponse } from "../helpers/responseHelper"; // Import response helpers

export class UserController {
  // Get all users
  async getAllUsers(req: Request, res: Response): Promise<Response | void> {
    try {
      logger.info("Fetching all users...");
      // Logic to fetch all users from the database
      // Example: const users = await UserModel.find();
      return successResponse(res, "Fetched all users", { users: [] }); // Send response with users (or empty array for now)
    } catch (error: any) {
      logger.error(`Error fetching users: ${error.message}`);
      return errorResponse(res, "Internal Server Error", 500);
    }
  }

  // Create a new user
  async createUser(req: Request, res: Response): Promise<Response | void> {
    try {
      logger.info(`Creating user: ${JSON.stringify(req.body)}`);
      // Logic to create a new user in the database
      // Example: const newUser = await UserModel.create(req.body);
      return successResponse(res, "User created", { user: req.body }); // Send back the created user
    } catch (error: any) {
      logger.error(`Error creating user: ${error.message}`);
      return errorResponse(res, "Internal Server Error", 500);
    }
  }

  // Get a user by ID
  async getUserById(req: Request, res: Response): Promise<Response | void> {
    try {
      const userId = req.params.id;
      logger.info(`Fetching user with ID: ${userId}`);
      // Logic to fetch user by ID
      // Example: const user = await UserModel.findById(userId);
      if (!userId) {
        return notFoundResponse(res, "User not found");
      }
      return successResponse(res, `User with ID: ${userId}`, { userId });
    } catch (error: any) {
      logger.error(`Error fetching user: ${error.message}`);
      return errorResponse(res, "Internal Server Error", 500);
    }
  }

  // Update a user by ID
  async updateUser(req: Request, res: Response): Promise<Response | void> {
    try {
      const userId = req.params.id;
      logger.info(`Updating user with ID: ${userId}`);
      // Logic to update user by ID
      // Example: const updatedUser = await UserModel.update(userId, req.body);
      return successResponse(res, `User with ID: ${userId} updated`, { userId });
    } catch (error: any) {
      logger.error(`Error updating user: ${error.message}`);
      return errorResponse(res, "Internal Server Error", 500);
    }
  }

  // Delete a user by ID
  async deleteUser(req: Request, res: Response): Promise<Response | void> {
    try {
      const userId = req.params.id;
      logger.info(`Deleting user with ID: ${userId}`);
      // Logic to delete user by ID
      // Example: await UserModel.delete(userId);
      return successResponse(res, `User with ID: ${userId} deleted`, { userId });
    } catch (error: any) {
      logger.error(`Error deleting user: ${error.message}`);
      return errorResponse(res, "Internal Server Error", 500);
    }
  }

  // User login
  async loginUser(req: Request, res: Response): Promise<Response | void> {
    try {
      const { email, password } = req.body;
      logger.info(`User login attempt: ${email}`);
      // Authentication logic
      // Example: const user = await UserModel.findByEmail(email);
      if (!email || !password) {
        return errorResponse(res, "Invalid email or password", 401);
      }
      // If login is successful
      return successResponse(res, "User logged in", { email });
    } catch (error: any) {
      logger.error(`Error logging in user: ${error.message}`);
      return errorResponse(res, "Internal Server Error", 500);
    }
  }

  // Get the logged-in user (from authMiddleware)
  async getLoggedInUser(req: Request, res: Response): Promise<Response | void> {
    try {
      const user = (req as any).user; // Extract logged-in user from authMiddleware
      if (!user) {
        return notFoundResponse(res, "User not found");
      }
      return successResponse(res, "Logged-in user details", user);
    } catch (error: any) {
      logger.error(`Error fetching logged-in user: ${error.message}`);
      return errorResponse(res, "Internal Server Error", 500);
    }
  }
}
