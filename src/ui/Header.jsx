import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder.jsx'

const Header = () => {
  return (
    <header>
      <Link to={`/`}>Pizza Bar</Link>
      <SearchOrder />
    </header>
  )
}

export default Header