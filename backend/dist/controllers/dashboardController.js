"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const dashboardService_1 = require("../services/dashboardService"); // Ensure the path is correct
const dashboardService = new dashboardService_1.DashboardService(); // Correctly instantiate the service
class DashboardController {
    async getCardItems(req, res) {
        try {
            const cardItems = await dashboardService.fetchCardItems();
            res.status(200).json(cardItems);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching card items: ' + error.message });
        }
    }
    async getMonthlySales(req, res) {
        try {
            const monthlySales = await dashboardService.fetchMonthlySales();
            res.status(200).json(monthlySales);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching monthly sales: ' + error.message });
        }
    }
    async getSalesByRegion(req, res) {
        try {
            const salesByRegion = await dashboardService.fetchSalesByRegion();
            res.status(200).json(salesByRegion);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching sales by region: ' + error.message });
        }
    }
    async getSalesByCategory(req, res) {
        try {
            const salesByCategory = await dashboardService.fetchSalesByCategory();
            res.status(200).json(salesByCategory);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching sales by category: ' + error.message });
        }
    }
}
exports.DashboardController = DashboardController;
