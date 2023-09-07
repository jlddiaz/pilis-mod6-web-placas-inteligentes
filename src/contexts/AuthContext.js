import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  saveUser: (userData) => {},
  getRefreshToken: () => {}
})

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthtenticated] = useState(false)
  const [accessToken, setAccessToken] = useState('')
  // const [refreshToken, setRefreshToken] = useState('')

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

  function saveUser(userData) {
    setAccessToken(userData.token)
    // setRefreshToken(userData.refreshToken)
    localStorage.setItem('token', JSON.stringify(userData.refreshToken))
    setIsAuthtenticated(true)
  }
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, getAccessToken, saveUser, getRefreshToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
