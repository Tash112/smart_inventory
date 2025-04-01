import { ConnectionPool } from 'mssql';
import * as bcrypt from 'bcrypt';

const pool = new ConnectionPool({
    user: 'your_username',
    password: 'your_password',
    server: 'your_server',
    database: 'your_database',
});

export class UserModel {
    static async findByEmail(email: string) {
        const request = pool.request();
        request.input('Email', email); // Set the parameter
        const result = await request.query(`SELECT * FROM Users WHERE email = @Email`);
        return result.recordset[0]; // Return the first user found
    }

    static async comparePassword(inputPassword: string, storedPassword: string) {
        return bcrypt.compare(inputPassword, storedPassword);
    }
}
