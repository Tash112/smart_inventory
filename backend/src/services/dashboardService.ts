import * as sql from 'mssql';

export class DashboardService {
    private pool: sql.ConnectionPool;

    constructor() {
        this.pool = new sql.ConnectionPool({
            user: 'omari',
            password: '1234',
            server: 'DESKTOP-F4INGN1\\SQLEXPRESS',
            database: 'smart_inventory',
            options: {
                encrypt: true, // Use encryption for SQL Server connections
                trustServerCertificate: true // Change to true for local dev / self-signed certs
            }
        });
    }

    async fetchCardItems() {
        try {
            await this.pool.connect();
            const result = await this.pool.request().query('SELECT title, quantity FROM card_items');
            return result.recordset; // Return the results directly
        } catch (error) {
            throw new Error('Error fetching card items: ' + (error as any).message);

        } finally {
            await this.pool.close();
        }
    }

    async fetchMonthlySales() {
        try {
            await this.pool.connect();
            const result = await this.pool.request().query('SELECT month, amount FROM monthly_sales');
            return result.recordset; // Return the results directly
        } catch (error) {
            throw new Error('Error fetching monthly sales: ' + (error as any).message);

        } finally {
            await this.pool.close();
        }
    }

    async fetchSalesByRegion() {
        try {
            await this.pool.connect();
            const result = await this.pool.request().query('SELECT region, sales FROM sales_by_region');
            return result.recordset; // Return the results directly
        } catch (error) {
            throw new Error('Error fetching sales by region: ' + (error as any).message);

        } finally {
            await this.pool.close();
        }
    }

    async fetchSalesByCategory() {
        try {
            await this.pool.connect();
            const result = await this.pool.request().query('SELECT category, sales FROM sales_by_category');
            return result.recordset; // Return the results directly
        } catch (error) {
            throw new Error('Error fetching sales by category: ' + (error as any).message);

        } finally {
            await this.pool.close();
        }
    }
}
