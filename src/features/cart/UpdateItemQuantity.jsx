import Button from '../../ui/Button.jsx'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice.js'

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch()

  return (
    <div className={`md-gap-3 flex items-center gap-1`}>
      <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
      <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  )
}

export default UpdateItemQuantity