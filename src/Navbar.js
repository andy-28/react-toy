import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faPlusSquare,
  faBookmark,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Explorkuma

      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>

        <CustomLink to="/pricing">Shop</CustomLink>
        <CustomLink to="/gallery">Explore</CustomLink>


      </ul>
      <ul>
        <button className="btn">
          <CustomLink to="/create"><FontAwesomeIcon icon={faPlusSquare} className='btnClose' /></CustomLink>
        </button>
        <button className="btn">
          <CustomLink to="/login"><FontAwesomeIcon icon={faUser} className='btnClose' /></CustomLink>
        </button>
        <button className="btn">
          <CustomLink to="/cart"><FontAwesomeIcon icon={faBookmark} className='btnClose' /></CustomLink>
        </button>
      </ul>

    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
