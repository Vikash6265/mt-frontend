import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../features/auth/authSlice';

const Login = () => {

   const {user,isLoading,isError,isSuccess,message} = useSelector((state)=>state.auth);

   const dispatch = useDispatch();
   const navigate = useNavigate();
  
   const [formData , setFormData] = useState({
    email : "",
    password : "",
   });

   const {email , password} = formData;

   const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(login(formData));
   }

   const handleChange = (e) =>{
    setFormData({
        ...formData,
        [e.target.name] : e.target.value,
    })
   }

   useEffect(()=>{
    if(user){
      navigate('/')
    }

    if(isError && message)
    {
      toast.error(message);
    }
  },[user,message,isError])

  return (
    <>
       <div className="card">
           <form className='shadow' onSubmit={handleSubmit}>
              <h2>LogIn Here</h2>
              <input className='form-control my-2' name='email' value={email} onChange={handleChange} type="email" placeholder='Enter Email...' required />
              <input className='form-control my-2' name='password' value={password} onChange={handleChange} type="password" placeholder='Enter Password...' required/>
              <button type='submit' className='btn btn-success w-100 mt-4'>Login</button>
           </form>
      </div>
    </>
  )
}

export default Login;
