import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './SignIn.css'
import { authUser } from '../../services/usuario.service'
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'

const SignIn = () => {
  // const { setCurrentUser } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [error, setError] = useState('')

  const auth = useAuth()
  const navigate = useNavigate()

  /* Local Storage */
  const onSubmit = async (data) => {
    try {
      const response = await authUser(data)
      if (response.ok) {
        const json = await response.json()
        if (json.token && json.refreshToken) {
          auth.saveUser(json)
          navigate('/home')
        }
      } else {
        const err = await response.json()
        setError(err.msg)
      }
    } catch (error) {
      console.log(error)
    }
    // localStorage.setItem('currentUser', JSON.stringify(data))
    // setCurrentUser(data)
  }

  const handleCancel = () => {
    navigate('/home')
  }

  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">
            Inicia Sesión para acceder a mas funcionalidades!!!.
          </h1>
          <div className="alert-err">
            {error && (
              <>
                <p className="error">{error}</p>
              </>
            )}
          </div>
          <div className="inputContainer">
            <input
              className="input"
              type="text"
              placeholder="a"
              {...register('mail', {
                required: ' ',
              })}
            />
            <label htmlFor="" className="label">
              Email
            </label>
          </div>
          <div className="inputContainer">
            <input
              className="input"
              type="password"
              placeholder="Password"
              {...register('password', {
                required: ' ',
              })}
            />
            <label htmlFor="" className="label">
              Password
            </label>
          </div>
          <button className="btnCancel" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="submitBtn" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
