import React, { useEffect } from 'react'
import ListGroupItem from './ListGroupItem'
import { useDispatch, useSelector } from 'react-redux'
import { readData } from '../features/crud/crudSlice';

const ListGroup = () => {

  const {allData} = useSelector((state)=>state.crud);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(readData());
  },[])

  if(allData.length === 0)
  {
    return <h3 className='length'>Not Data Yet!</h3>
  }


  return (
    <>
       <ul className='list-group'>
          {
            allData.map((crud,index)=><ListGroupItem key={index} crud={crud}/>)
          }
        </ul>
    </>
  )
}

export default ListGroup
