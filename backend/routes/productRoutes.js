import express from 'express'
const router = express.Router()
import { getProducts } from '../controllers/productController.js'
import { getProductById } from '../controllers/productController.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

export default router
