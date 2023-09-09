import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Navigation.css'
import Home from '../Home/Home'

const Navigation = () => {
  const auth = useAuth()
  const handleSignOut = () => {
    auth.changeisAthenticated(false)
  }

  return (
    <>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="nav-link" to="/home">
            Home
          </Link>
          {auth.isAuthenticated && (
            <>
              <Link className="nav-link" to="/mascotas">
                Mascotas
              </Link>
              <Link className="nav-link" to="/objetos">
                Objetos
              </Link>
            </>
          )}
          {auth.isAuthenticated ? (
            <span className="nav-link sign-in" onClick={handleSignOut}>
              Cerrar Sesión
            </span>
          ) : (
            <>
              <Link className="nav-link sign-in" to="/signup">
                Registrarse
              </Link>        
              <Link className="nav-link sign-in" to="/signin">
                Iniciar Sesión
              </Link>      
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
