import Button from '../../ui/Button.jsx'
import { useFetcher } from 'react-router-dom'
import { updateOrder } from '../../services/apiRestaurant.js'

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher()
  // const { priority } = order

  return (
    <fetcher.Form method={`patch`} className={`text-right`}>
      <Button type={`primary`}>Make Priority</Button>
    </fetcher.Form>
  )
}

export default UpdateOrder

export const action = async ({ request, params }) => {
  const data = { priority: true }
  await updateOrder(params.orderId, data)
  return null
}