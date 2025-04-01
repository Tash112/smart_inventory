import { Request, Response } from 'express';
import { DashboardService } from '../services/dashboardService'; // Ensure the path is correct

const dashboardService = new DashboardService(); // Correctly instantiate the service

export class DashboardController {
    async getCardItems(req: Request, res: Response) {
        try {
            const cardItems = await dashboardService.fetchCardItems();
            res.status(200).json(cardItems);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching card items: ' + error.message });
        }
    }

    async getMonthlySales(req: Request, res: Response) {
        try {
            const monthlySales = await dashboardService.fetchMonthlySales();
            res.status(200).json(monthlySales);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching monthly sales: ' + error.message });
        }
    }

    async getSalesByRegion(req: Request, res: Response) {
        try {
            const salesByRegion = await dashboardService.fetchSalesByRegion();
            res.status(200).json(salesByRegion);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching sales by region: ' + error.message });
        }
    }

    async getSalesByCategory(req: Request, res: Response) {
        try {
            const salesByCategory = await dashboardService.fetchSalesByCategory();
            res.status(200).json(salesByCategory);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching sales by category: ' + error.message });
        }
    }
}
