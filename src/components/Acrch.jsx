import React from 'react'
import { archiveData, unarchiveData } from '../features/crud/crudSlice'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Acrch = ({data}) => {
    
    const dispatch = useDispatch();

    const handleUnArchive = (_id) =>{
        dispatch(unarchiveData(_id))
    }
    
    const handleArchive = (_id) =>{
        dispatch(archiveData(_id))
    }
    

  return (
    <>
       <div className="arch-list">
            <h3>{data?.title}</h3>

            {!data.isArchived ? (
                <Link to={"/"}><i onClick={()=>handleUnArchive(data?._id)} class="fa-solid fa-circle-up"></i></Link>
            ) : (
                <Link to={"/"}><i onClick={()=>handleArchive(data?._id)} class="fa-solid fa-circle-down"></i></Link>
            )}

        </div>
    </>
  )
}

export default Acrch;
