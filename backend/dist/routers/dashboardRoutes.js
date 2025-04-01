"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
const router = (0, express_1.Router)();
const dashboardController = new dashboardController_1.DashboardController();
// Define routes for dashboard APIs
router.get('/card-items', dashboardController.getCardItems.bind(dashboardController));
router.get('/monthly-sales', dashboardController.getMonthlySales.bind(dashboardController));
router.get('/sales-by-region', dashboardController.getSalesByRegion.bind(dashboardController));
router.get('/sales-by-category', dashboardController.getSalesByCategory.bind(dashboardController));
exports.default = router;
