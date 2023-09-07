import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import './SignUp.css'
import { authUser } from '../../services/usuario.service'
import { useAuth } from '../../contexts/AuthContext'

const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

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
          navigate('/')
        }
      }
    } catch (error) {
      console.log(error)
    }
    // localStorage.setItem('currentUser', JSON.stringify(data))
    // setCurrentUser(data)
    
  }

  return (
    <div className="signupFrm">
      <div class="wrapper">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">Sign in...</h1>
          <div className="inputContainer">
            <input
              className="input"
              type="text"
              placeholder="a"
              {...register('mail', {
                required: ' ',
              })}
            />
            <label for="" className="label">
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
            <label for="" className="label">
              Password
            </label>
          </div>
          <button className="submitBtn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
