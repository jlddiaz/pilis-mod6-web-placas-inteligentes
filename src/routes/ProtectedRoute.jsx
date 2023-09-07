import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const ProtectedRoute = () => {
  const auth = useAuth()

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />
}
