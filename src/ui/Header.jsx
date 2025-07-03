import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder.jsx'
import Username from '../features/user/Username.jsx'

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 font-sans uppercase">
      <Link to={`/`} className="tracking-widest">
        Pizza Bar
      </Link>
      <SearchOrder />
      <Username />
    </header>
  )
}

export default Header