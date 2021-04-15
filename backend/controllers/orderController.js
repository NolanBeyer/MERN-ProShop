import asyncHandler from 'express-async-handler'
import { updateUserProfile } from '../../frontend/src/actions/userActions.js'
import Order from '../models/orderModel.js'

// @desc  Create new order
// @route  Post /api/products
// @access  Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body
  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      user: req.user._id,
    })
    const createOrder = await order.save()

    res.status(201).json(createOrder)
  }
})

// @desc  Get order by ID
// @route  Get /api/orders/:id
// @access  Private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc  Update order to paid
// @route  Get /api/orders/:id/pay
// @access  Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.payment.result = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email: req.body.payer.emailAddress,
    }

    const updateOrder = await order.save()
    res.json(updateOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

export { addOrderItems, getOrderById, updateOrderToPaid }
