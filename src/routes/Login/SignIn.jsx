import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../../services/usuario.service'
import { useAuth } from '../../contexts/AuthContext'
import './SignIn.css'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [error, setError] = useState('')
  const [mostrarErr, setMostrarErr] = useState(false)
  const auth = useAuth()
  const navigate = useNavigate()

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
        setMostrarErr(true)
        setTimeout(() => {
          setMostrarErr(false)
        }, 3000)
      }
    } catch (error) {
      console.log(error)
    }
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
          {mostrarErr && (
            <div className="alert-err">
              {error && <p className="error">{error}</p>}
            </div>
          )}
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
