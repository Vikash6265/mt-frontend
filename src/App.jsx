import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Arch_Unar from './pages/Arch_Unar';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div className="container-fluid p-0">
         
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Archive' element={<Arch_Unar/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  )
}

export default App
