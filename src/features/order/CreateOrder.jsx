// import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import { createOrder } from '../../services/apiRestaurant.js'
import Button from '../../ui/Button.jsx'
import { useSelector } from 'react-redux'
import { getUsername } from '../user/userSlice.js'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = str => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str)

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15
  }
]

// import cart from '../cart/Cart.jsx'

function CreateOrder() {
  const username = useSelector(getUsername)
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'loading'
  // const [withPriority, setWithPriority] = useState(false);

  const formErrors = useActionData()

  const cart = fakeCart

  return (
    <div className={`px-4 py-6`}>
      <h2 className={`mb-8 text-xl font-semibold`}>Ready to order? Let&#39;s go!</h2>

      <Form method="POST">
        <div className={`mb-5 flex flex-col gap-2 sm:flex-row sm:items-center`}>
          <label className={`sm:basis-40`}>First Name</label>
          <input className="input grow" type="text" defaultValue={username} name="customer" required />
        </div>

        <div className={`mb-5 flex flex-col gap-2 sm:flex-row sm:items-center`}>
          <label className={`sm:basis-40`}>Phone number</label>
          <div className={`grow`}>
            <input type="tel" className="input w-full" name="phone" required />
            {formErrors?.phone && (
              <p className={`mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700`}>{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div className={`mb-5 flex flex-col gap-2 sm:flex-row sm:items-center`}>
          <label className={`sm:basis-40`}>Address</label>
          <div className={`grow`}>
            <input className={`input w-full`} type="text" name="address" required />
          </div>
        </div>

        <div className={`mb-12 flex items-center gap-5`}>
          <input
            className={`h-6 w-6 accent-yellow-400 hover:cursor-pointer focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2`}
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className={`font-medium`} htmlFor="priority">
            Want to yo give your order prioriy?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type={`primary`} disabled={isSubmitting}>
            {isSubmitting ? `Placing order..` : `Order now`}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on'
  }

  const errors = {}
  if (!isValidPhone(order.phone)) errors.phone = 'Invalid phone number'

  if (Object.keys(errors).length > 0) return errors

  const newOrder = await createOrder(order)

  return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder