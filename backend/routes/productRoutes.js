import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProductById,
  createProduct,
  updateProduct,
} from '../controllers/productController.js'
import { protect, admin } from '../middleWare/authMiddleWare.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProduct)

export default router
