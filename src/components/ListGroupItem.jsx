import React from 'react'
import { useDispatch } from 'react-redux'
import { archiveData, deleteData, edit,readData, unarchiveData } from '../features/crud/crudSlice';
// import { LiaThumbtackSolid } from "react-icons/lia";
// import { Link } from 'react-router-dom';

const ListGroupItem = ({crud}) => {

  const dispatch = useDispatch();

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const randomColor = getRandomColor(); // Generate random color for each list item


  const handleRemove = async (_id) =>{
    await dispatch(deleteData(_id))
    dispatch(readData())
  }

  const handleEdit = (editItem) =>{
     dispatch(edit(editItem))
  }

  const handleArchive = (_id) =>{
    dispatch(archiveData(_id))
  }

  const handleUnArchive = (_id) =>{
    dispatch(unarchiveData(_id))
  }


  return (
    <>
      <li className='list-group-item' style={{ backgroundColor: randomColor }} >
            <h3>Title : {crud?.title}</h3>
            <span>
              <button type='submit' className='btn btn-warning btn-sm' onClick={()=>handleEdit(crud)}>Edit</button>
              <button type='submit' className='btn btn-danger btn-sm' onClick={()=>handleRemove(crud?._id)}>Remove</button>
              
              {crud.isArchived ? (
                <i onClick={()=>handleUnArchive(crud?._id)} class="fa-solid fa-circle-up"></i>
              ) : (
               <i onClick={()=>handleArchive(crud?._id)} class="fa-solid fa-circle-down"></i>
              )}

            </span>
      </li>
    </>
  )
}

export default ListGroupItem
