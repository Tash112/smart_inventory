const request = require("supertest");
const app = require("../server"); // Adjust the path as necessary
const User = require("../database/models/user");

describe("User API", () => {
    beforeAll(async () => {
        await User.sync({ force: true }); // Reset the database before tests
    });

    afterAll(async () => {
        await User.drop(); // Clean up after tests
    });

    it("should register a new user", async () => {
        const response = await request(app)
            .post("/api/users/register")
            .send({
                name: "John Doe",
                email: "john@example.com",
                password: "password123"
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("should return validation errors for registration", async () => {
        const response = await request(app)
            .post("/api/users/register")
            .send({
                email: "john@example.com",
                password: "password123"
            });
        expect(response.status).toBe(400);
        expect(response.body.errors).toHaveLength(1);
    });

    it("should authenticate a user", async () => {
        await request(app)
            .post("/api/users/register")
            .send({
                name: "Jane Doe",
                email: "jane@example.com",
                password: "password123"
            });

        const response = await request(app)
            .post("/api/users/login")
            .send({
                email: "jane@example.com",
                password: "password123"
            });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("token");
    });

    it("should return error for incorrect password", async () => {
        const response = await request(app)
            .post("/api/users/login")
            .send({
                email: "jane@example.com",
                password: "wrongpassword"
            });
        expect(response.status).toBe(401);
        expect(response.body.message).toBe("Incorrect password");
    });
});
