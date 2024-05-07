import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controller/orderController.mjs';
import { protect, admin } from '../middleware/authmiddleware.mjs';

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorder').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
