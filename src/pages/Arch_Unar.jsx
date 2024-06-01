import React, { useEffect } from 'react'
import Acrch from '../components/Acrch'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Arch_Unar = () => {

    const {archivedData} = useSelector((state)=>state.crud)

   const navigate = useNavigate();

   useEffect(()=>{
    if(archivedData.length === 0){
        navigate("/")
    }
   })
   

  return (
   <>
    <div className="new">
      <div className="archive-unarchive">
        <h2>Archive/unArchive Note</h2>
        {
          archivedData.map((data)=><Acrch key={data._id} data={data}/>)
        }
      </div>
    </div>
   </>
  )
}

export default Arch_Unar
