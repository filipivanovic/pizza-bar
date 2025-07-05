import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
  // cart: [
  //   {
  //     pizzaId: 1,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32
  //   }
  // ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find(item => item.id === action.payload)
      item.quantity++
      item.totalPrice = item.quantity * item.unitPrice
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find(item => item.id === action.payload)
      item.quantity--
      item.totalPrice = item.quantity * item.unitPrice
    },
    clearCart(state) {
      state.cart = []
    }
  }
})

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions
export const getTotalCartQuantity = state => state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
export const getTotalCartPrice = state => state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0)
export default cartSlice.reducer