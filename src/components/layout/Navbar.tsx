import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Navbar.css'

const TEACHER_LINKS = [
  { to: '/calendar', label: 'Calendar' },
  { to: '/student',   label: 'Student' },
  { to: '/summary',   label: 'Summary' },
  { to: '/account',   label: 'Account' },
]

const STUDENT_LINKS = [
  { to: '/calendar', label: 'Calendar' },
  { to: '/account',  label: 'Account' },
]

const Navbar = () => {
  const location = useLocation()
  const { user } = useAuth()

  const links = user?.role === 'teacher' ? TEACHER_LINKS : STUDENT_LINKS
  const isActive = (path: string) => location.pathname === path ? 'active' : ''

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/calendar" className="navbar-logo">
          <h2>Witup Academy</h2>
        </Link>
        <ul className="navbar-menu">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={`navbar-link ${isActive(to)}`}>{label}</Link>
            </li>
          ))}
        </ul>
        {/* {user && (
          <span className="navbar-user">
            {user.name}
          </span>
        )} */}
      </div>
    </nav>
  )
}

export default Navbar
