import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// 路由这个需要按顺序，否则会匹配错
// router.route() 是用于当您需要在同一路径上定义多个处理函数（例如，GET 和 POST）时使用的。如果只有一个请求方法需要定义，直接使用 router.get(), router.post() 等方法更为直接和清晰。
router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.route('/:id/reviews').post(protect, createProductReview);

export default router;