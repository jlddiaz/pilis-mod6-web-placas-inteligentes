import { createContext, useContext, useState } from 'react'
import { getPerfilByIdUsuario } from '../services/perfil.service'

const AuthContext = createContext({
  isAuthenticated: false,
  idUsuario: '',
  idPerfil:'',
  changeisAthenticated: (valor) => {},
  getAccessToken: () => {},
  saveUser: (userData) => {},
  getRefreshToken: () => {},
})

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthtenticated] = useState(false)
  const [accessToken, setAccessToken] = useState('')
  const [idUsuario, setIdUsuario] = useState()
  const [idPerfil, setIdPerfil] = useState(null)
  // const [refreshToken, setRefreshToken] = useState('')

  function changeisAthenticated(valor) {
    setIsAuthtenticated(valor)
  }
  function getAccessToken() {
    return accessToken
  }

  function getRefreshToken() {
    const token = localStorage.getItem('token')
    if (token) {
      const { refreshToken } = JSON.parse(token)
      return refreshToken
    }
    return null
  }

  async function saveUser(userData) {
    setAccessToken(userData.token)
    // setRefreshToken(userData.refreshToken)
    localStorage.setItem('token', JSON.stringify(userData.refreshToken))
    setIsAuthtenticated(true)
    setIdUsuario(userData.idUsuario)
    const perfil = await getPerfilByIdUsuario(userData.idUsuario)
    if (perfil) setIdPerfil(perfil.idPerfil)
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        idUsuario,
        idPerfil,
        getAccessToken,
        changeisAthenticated,
        saveUser,
        getRefreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
