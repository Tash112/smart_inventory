"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const sql = __importStar(require("mssql"));
class DashboardService {
    pool;
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
        }
        catch (error) {
            throw new Error('Error fetching card items: ' + error.message);
        }
        finally {
            await this.pool.close();
        }
    }
    async fetchMonthlySales() {
        try {
            await this.pool.connect();
            const result = await this.pool.request().query('SELECT month, amount FROM monthly_sales');
            return result.recordset; // Return the results directly
        }
        catch (error) {
            throw new Error('Error fetching monthly sales: ' + error.message);
        }
        finally {
            await this.pool.close();
        }
    }
    async fetchSalesByRegion() {
        try {
            await this.pool.connect();
            const result = await this.pool.request().query('SELECT region, sales FROM sales_by_region');
            return result.recordset; // Return the results directly
        }
        catch (error) {
            throw new Error('Error fetching sales by region: ' + error.message);
        }
        finally {
            await this.pool.close();
        }
    }
    async fetchSalesByCategory() {
        try {
            await this.pool.connect();
            const result = await this.pool.request().query('SELECT category, sales FROM sales_by_category');
            return result.recordset; // Return the results directly
        }
        catch (error) {
            throw new Error('Error fetching sales by category: ' + error.message);
        }
        finally {
            await this.pool.close();
        }
    }
}
exports.DashboardService = DashboardService;
