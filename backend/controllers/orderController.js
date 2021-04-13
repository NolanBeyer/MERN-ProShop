import asyncHandler from 'express-async-handler'
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

export { addOrderItems }