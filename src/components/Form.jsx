import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {createData, updateData } from '../features/crud/crudSlice';

const Form = () => {

  const {edit} = useSelector((state)=>state.crud)

  const [title,setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    edit.isEdit ?
    dispatch(updateData({
      _id : edit.editData._id,
      title,
    }))
    :
    dispatch(createData({
      title,
    }))

    setTitle("");
  }

  useEffect(()=>{
    setTitle(edit.editData.title)
  },[edit])
  

  return (
   <>
     <form className='note shadow-lg' onSubmit={handleSubmit}>
        <h2>Create Note</h2>
         <input className='form-control my-2' onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter Text Here...' required />
         {/* <input className='form-control my-2' type="text" placeholder='Enter Content..' /> */}
         <button type='submit' className='btn btn-success w-100 mt-3'>Save</button>
     </form>
   </>
  )
}

export default Form;