import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProductById,
  createProduct,
  createProductReview,
  updateProduct,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleWare/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.get('/top/:top', getTopProducts)
router.route('/:id/reviews').post(protect, createProductReview)

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProduct)

export default router
