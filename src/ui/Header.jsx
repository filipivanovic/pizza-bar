import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to={`/`}>Pizza Bar</Link>
    </header>
  )
}

export default Header