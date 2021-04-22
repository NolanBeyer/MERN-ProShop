import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} from '../controllers/userController.js'
const router = express.Router()
import { protect, admin } from '../middleWare/authMiddleWare.js'

router.route('/').post(registerUser).get(admin, protect, getUsers)

router.post('/login', authUser)

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
