import { createContext, useContext, useState } from 'react'
import { getPerfilByIdUsuario } from '../services/perfil.service'

const AuthContext = createContext({
  isAuthenticated: false,
  idUsuario: '',
  idPerfil: '',
  perfil: {},
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
  const [perfil, setPerfil] = useState(null)
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
    localStorage.setItem('token', JSON.stringify(userData.refreshToken))
    setIsAuthtenticated(true)
    setIdUsuario(userData.idUsuario)
    await getPerfilByIdUsuario(userData.idUsuario)
      .then((per) => {
        setIdPerfil(per.idPerfil)
        setPerfil(per)
      })
      .catch((err) => console.warn(err))
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
        perfil,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
