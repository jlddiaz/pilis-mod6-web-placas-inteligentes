import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'
import { createUser } from '../../services/usuario.service'
import { useState } from 'react'

const SignUp = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const navigate = useNavigate()
  const [errores, setErrores] = useState([])
  const [mostrarErr, setMostrarErr] = useState(false)

  const onSubmit = async (data) => {
    // try {
    const response = await createUser(data)
    if (response.ok) {
      console.log(response.json())
      navigate('/')
    } else {
      const arrayErr = await response.json()
      setErrores(arrayErr.errors)
      setMostrarErr(true)
      setTimeout(() => {
        setMostrarErr(false)
      }, 3000)
    }
  }

  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">Registar</h1>
          {mostrarErr && (
            <div className="alert-err">
              {errores &&
                errores.map((err) => <p className="error">{err.msg}</p>)}
            </div>
          )}
          <div className="inputContainer">
            <input
              className="input"
              type="text"
              placeholder="a"
              {...register('mail', {
                required: {
                  value: true,
                  message: 'mail requerido',
                },
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
          <button className="submitBtn" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
