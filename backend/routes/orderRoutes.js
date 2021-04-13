import express from 'express'
import { addOrderItems } from '../controllers/orderController.js'
const router = express.Router()
import { protect } from '../middleWare/authMiddleWare.js'

router.route('/').post(protect, addOrderItems)

export default router
