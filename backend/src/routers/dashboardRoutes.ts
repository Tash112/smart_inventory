import { Router } from 'express';
import { DashboardController } from '../controllers/dashboardController';

const router = Router();
const dashboardController = new DashboardController();

// Define routes for dashboard APIs
router.get('/card-items', dashboardController.getCardItems.bind(dashboardController));
router.get('/monthly-sales', dashboardController.getMonthlySales.bind(dashboardController));
router.get('/sales-by-region', dashboardController.getSalesByRegion.bind(dashboardController));
router.get('/sales-by-category', dashboardController.getSalesByCategory.bind(dashboardController));

export default router;
