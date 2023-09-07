import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './SignUp.css'
import { createUser } from '../../services/usuario.service';

const SignUp = () => {
  const { setCurrentUser } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  /* Local Storage */
  const onSubmit = async(data) => {
    try {
      const response = await createUser(data)   
      console.log(response)
      if (response.ok){
        console.log(response)
      }   
    } catch (error) {
      console.log(error)      
    }    
    // localStorage.setItem('currentUser', JSON.stringify(data))
    // setCurrentUser(data)
    navigate('/')
  }

  return (
    <div className='signupFrm'>
       <div class="wrapper">
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title">Sign up...</h1>
      <div className="inputContainer">
        <input
          className='input'
          type="text"
          placeholder='a'
          {...register('mail', {
              required : ' '
            }
          )
        } />
        <label for="" className="label">Email</label>
                
        </div>
        <div className="inputContainer">
        <input
          className='input'
          type='password'
          placeholder='Password'
          {...register(
              'password',
              {
                required : ' '
              }
            )
          }
        />
       <label for="" className="label">Password</label>
       
        </div>
         <button className='submitBtn' type='submit'>Sign Up</button>
      </form>
      </div>
    </div>
  
   
  
  )
}

export default SignUp; 