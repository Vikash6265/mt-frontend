import React from 'react'
import { archiveData, unarchiveData } from '../features/crud/crudSlice'
import { useDispatch } from 'react-redux'

const Acrch = ({data}) => {
    
    const dispatch = useDispatch();

    const handleUnArchive = (_id) =>{
        dispatch(unarchiveData(_id))
    }
    
    const handleArchive = (_id) =>{
        dispatch(archiveData(_id))
    }
    
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    
    const randomColor = getRandomColor(); 

    

  return (
    <>
       <div className="arch-list" style={{ backgroundColor: randomColor }}>  
            <h3>{data?.title}</h3>

            {!data.isArchived ? (
                <i onClick={()=>handleUnArchive(data?._id)} class="fa-solid fa-circle-up"></i>
            ) : (
                <i onClick={()=>handleArchive(data?._id)} class="fa-solid fa-circle-down" ></i>
            )}

        </div>
    </>
  )
}

export default Acrch;
