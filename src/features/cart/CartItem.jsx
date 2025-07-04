import { formatCurrency } from '../../utils/helpers.js'

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  )
}

export default CartItem