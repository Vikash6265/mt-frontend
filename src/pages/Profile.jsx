import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const {user} = useSelector((state=>state.auth))

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogOut = () =>{
    dispatch(logOut())
  };

  useEffect(()=>{
    if(!user){
       navigate("/")
    }
  },[user])

  return (
    <>
      <div className="profile-container">
      <div className="profile-card">
         <div className="user-name"><h1>User</h1></div>
         <div className="user-data">
            <h3>Name : {user?.name} </h3>
            <p>Email : {user?.email} </p>
            <button onClick={()=>handleLogOut()}>Log Out</button>
         </div>
      </div> 
      </div> 
    </>
  )
}

export default Profile
