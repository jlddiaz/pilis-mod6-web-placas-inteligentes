import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './routes/Login/SignUp'
import SignIn from './routes/Login/SignIn'
import Navigation from './routes/Navigation/Navigation'
import { ProtectedRoute } from './routes/ProtectedRoute'
import PanelMascota from './routes/PanelMascota/PanelMascota'
import PanelObjeto from './routes/PanelObjeto/PanelObjeto'
import { AuthProvider } from './contexts/AuthContext'
import Home from './routes/Home/Home'
import Perfil from './routes/Perfil/Perfil'
import FormPerfil from './components/Perfil/FormPerfil'
import { MascotaView } from './routes/PanelMascota/MascotaView'
import { ObjetoView } from './routes/PanelObjeto/ObjetoView'
import Aplicacion from './routes/Home/Aplicacion'
import Contacto from './routes/Home/Contacto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/aplicacion',
        element: <Aplicacion/>,
      },
      {
        path: '/contacto',
        element: <Contacto/>,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/mascotas/:id',
        element: <MascotaView />,
      },
      {
        path: '/objetos/:id',
        element: <ObjetoView />,
      },
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/mascotas',
            element: <PanelMascota />,
          },          
          {
            path: '/objetos',
            element: <PanelObjeto />,
          },
          {
            path: '/perfil',
            element: <Perfil />,
          },
          {
            path: '/formperfil',
            element: <FormPerfil />,
          },
        ],
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
