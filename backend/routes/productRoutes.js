import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProductById,
} from '../controllers/productController.js'
import { protect, admin } from '../middleWare/authMiddleWare.js'
router.route('/').get(getProducts)

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProductById)

export default router
