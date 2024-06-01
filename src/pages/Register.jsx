import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { register } from '../features/auth/authSlice';

const Register = () => {

  const {user,isLoading,isError,isSuccess,message} = useSelector((state)=>state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData , setFormData] = useState({
    name : "",
    email : "",
    password : "",
    password2 : "",
  });

  const {name , email , password , password2} = formData;

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(password !== password2)
    {
       toast.error("Password Not Matched !")
    }
    else{
        dispatch(register(formData));
    }
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
              <h2>Register Here</h2>
              <input className='form-control my-2' name='name' value={name} type="text" onChange={handleChange}  placeholder='Enter Name Here...' required />
              <input className='form-control my-2' name='email' value={email}  onChange={handleChange} type="email" placeholder='Enter Email...' required />
              <input className='form-control my-2' name='password' value={password} onChange={handleChange} type="password" placeholder='Enter Password...' required/>
              <input className='form-control my-2' name='password2' value={password2} onChange={handleChange} type="password" placeholder='Confirm Password..' required/>
              <button type='submit' className='btn btn-success w-100 mt-4'>Register</button>
           </form>
      </div>
    </>
  )
}

export default Register;