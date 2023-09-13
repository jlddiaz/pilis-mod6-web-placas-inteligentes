import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
import { createUser } from '../../services/usuario.service';
import { useState } from 'react';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
 const [errores, setErrores] = useState([])
  /* Local Storage */
  const onSubmit = async(data) => {
    // try {
      const response = await createUser(data)   
      if (response.ok){
        console.log(response.json())
        navigate('/')
      }else{
        console.log('errores')
        const arrayErr = await response.json()
        setErrores(arrayErr.errors)
        console.log(errores)
      }
      // console.log(response.errors[1])  
    // } catch (error) {
    //   console.log(error)    
    // }    
    // localStorage.setItem('currentUser', JSON.stringify(data))
    // setCurrentUser(data)
    
  }

  return (
    <div className='signupFrm'>
       <div className="wrapper">
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title">Registar</h1>
      {errores && (errores.map((err)=>(<p>{err.msg}</p>)))}
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
        <label htmlFor="" className="label">Email</label>
                
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
       <label htmlFor="" className="label">Password</label>
       
        </div>
         <button className='submitBtn' type='submit'>Registrar</button>
      </form>
      </div>
    </div>
  
   
  
  )
}

export default SignUp; 