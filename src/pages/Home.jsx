import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import ListGroup from '../components/ListGroup'


const Home = () => {

    const {user} = useSelector((state)=>state.auth)

    const navigate = useNavigate();

    useEffect(()=>{
        if(!user)
        {
          navigate("/Login")
        }
    },[user])

  return (
   <>
     <div className="notebook">
       <div className="notebook2">
       
       <Form/>

       <ListGroup/>
       </div>

     </div>
   </>
  )
}

export default Home
