import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const {user} = useSelector((state)=>state.auth)

  if(!user)
    {
      return <div className="toggle" style={{display:'none'}}>
      <span className='top_line common'></span>
      <span className='middle_line common'></span>
      <span className='bottom_line common'></span>
  </div>
    }
  
  return (
    <>
      <label className='label'>
        <input className='sidebar' type="checkbox" />
        <div className="toggle">
            <span className='top_line common'></span>
            <span className='middle_line common'></span>
            <span className='bottom_line common'></span>
        </div>
      <div className="slide">
        <h1>MENU</h1>
        <ul>
            <li><Link to={'/Profile'}><i class="fa-solid fa-user"></i> Profile</Link></li>
            <li><Link to={"/"}><i class="fa-solid fa-house"></i> Home</Link></li>
            <li><Link to={"/"}><i class="fa-solid fa-list-check"></i> Create Note</Link></li>
            <li><Link to={"/Archive"}><i class="fa-solid fa-thumbtack"></i> Archive/unArchive</Link></li>
        </ul>
    </div>
      </label>
    </>
  )
}

export default Sidebar
