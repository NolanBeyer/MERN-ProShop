import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer } from './reducers/productReducer'
import { productDetailsReducer } from './reducers/productReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

const cartItemFromStorage = localStorage.getItem('cartItem')
  ? JSON.parse(localStorage.getItems('cartItem'))
  : []

const initialState = {
  cart: { cartItems: cartItemFromStorage },
}

const middleWare = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
)

export default store
