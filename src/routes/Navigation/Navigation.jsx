import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Navigation.css'

const Navigation = () => {
  const auth = useAuth()

  const handleSignOut = () => {
    auth.setIsAuthtecticated(false)
  }

  return (
    <>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="nav-link" to="/mascotas">
            Mascotas
          </Link>
          <Link className="nav-link" to="/objetos">
            Objetos
          </Link>
          {auth.isAuthtecticated ? (
            <span className="nav-link sign-in" onClick={handleSignOut}>
              Log Out
            </span>
          ) : (
            <Link className="nav-link sign-in" to="/signUp">
              Sign Up
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
