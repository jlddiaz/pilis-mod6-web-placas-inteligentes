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
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
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
