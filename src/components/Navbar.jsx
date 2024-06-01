import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../features/auth/authSlice';

const Navbar = () => {

  const {user} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogOut = () =>{
    dispatch(logOut())
  };

  return (
    <>
      
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark" style={{paddingInline:'10px'}}>
        <div class="container-fluid">
          <Link to={"/"} class="navbar-brand">NoteList</Link>
          <form class="d-flex" role="search">

            {
              user ? (
                <button class="btn btn-outline-warning" type="submit" onClick={handleLogOut}>LOGOUT</button>
              )
              :
              (
                <>
                  <Link to={"/Login"}><button class="btn btn-outline-light" type="submit">LOGIN</button></Link>
                  <Link to={"/Register"}><button class="btn btn-outline-light" type="submit" style={{marginLeft:'10px'}}>REGISTER</button></Link>
                </>
              )
            }

          </form>
       </div>
      </nav>

    </>
  )
}

export default Navbar;

{/* <>
                  <Link to={"/Login"}><button class="btn btn-outline-light" type="submit">LOGIN</button></Link>
                  <Link to={"/Register"}><button class="btn btn-outline-light" type="submit" style={{marginLeft:'10px'}}>REGISTER</button></Link>
                </> */}