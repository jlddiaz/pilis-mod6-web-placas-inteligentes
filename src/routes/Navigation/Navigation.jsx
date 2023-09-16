import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Navigation.css'

const Navigation = () => {
  const auth = useAuth()
  const handleSignOut = () => {
    auth.changeisAthenticated(false)
  }
  return (
    <>
      <header id="mainheader">
        <nav id="navbar">
          <div className="container">
            <ul>
              <li>
                <Link className="nav-link" to="/home">
                  Nosotros
                </Link>
                {/* <a href="#about"></a> */}
              </li>
              <li>
                <Link className="nav-link" to="/aplicacion">
                  Aplicación
                </Link>
                {/* <a href="#aplicacion"></a> */}
              </li>
              <li>
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
                {/* <a href="#contacto"></a> */}
              </li>
              {auth.isAuthenticated ? (
                <>
                  <li>
                    <Link className="nav-link" to="/mascotas">
                      Mascotas
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/objetos">
                      Objetos
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/perfil">
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="nav-link sign-in"
                      onClick={handleSignOut}
                    >
                      Cerrar Sesión
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="nav-link sign-in" to="/signup">
                      Registrarse
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link sign-in" to="/signin">
                      Iniciar Sesión
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Navigation
