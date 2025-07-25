import LinkButton from '../../ui/LinkButton.jsx'
import Button from '../../ui/Button.jsx'
import CartItem from './CartItem.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from './cartSlice.js'
import { getUsername } from '../user/userSlice.js'
import EmptyCart from './EmptyCart.jsx'

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15
//   }
// ]

function Cart() {
  const cart = useSelector(getCart)
  const username = useSelector(getUsername)

  const dispatch = useDispatch()

  if (!cart.length) return <EmptyCart />

  return (
    <div className={`px-4 py-3`}>
      <LinkButton to={`/menu`}>&larr; Back to menu</LinkButton>
      <h2 className={`mt-7 text-xl font-semibold`}>Your cart, {username}</h2>
      <ul className={`mt-3 divide-y divide-stone-200 border-b`}>
        {cart.map(item => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className={`mt-6 space-x-4`}>
        <Button type={`primary`} to={`/order/new`}>
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} type={`secondary`}>
          Clear cart
        </Button>
      </div>
    </div>
  )
}

export default Cart