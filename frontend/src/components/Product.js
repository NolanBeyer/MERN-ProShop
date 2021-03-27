import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.img src={product.image} variant='top' />
      </a>
      <Card.body>
        <a href={`/product/${product._id}`}>
          <Card.title as='div'>
            <strong>{product.name}</strong>
          </Card.title>
        </a>
        <Card.text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.text>
        <Card.text as='h3'>${product.price}</Card.text>
      </Card.body>
    </Card>
  )
}

export default Product
