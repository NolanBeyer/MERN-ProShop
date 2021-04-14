import express from 'express'
import { addOrderItems, getOrderById } from '../controllers/orderController.js'
const router = express.Router()
import { protect } from '../middleWare/authMiddleWare.js'

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)

export default router
