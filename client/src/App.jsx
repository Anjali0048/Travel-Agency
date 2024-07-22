import './App.css'
import {Routes, Route} from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Dashboard from './Pages/Dashboard';

function App() {
  const loggedIn = localStorage.getItem("isLoggedIn");
  const [isloggedIn,setIsloggedIn] = useState(false);
  const [user, setLoginUser] = useState({});
  const [userDetails, setUserDetails] = useState({});
  
  useEffect(()=>{
    const storedUser = localStorage.getItem("userDetails");
    if(loggedIn){
      setUserDetails(JSON.parse(storedUser));
    }
    else{
      setUserDetails({});
    }
  },[])
  return (
    <div className='min-w-screen min-h-screen dark:bg-gray-800'>
      <Routes>
        <Route path="/" element={<Dashboard/>}/> 
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/login" element={<Login setLoginUser={setLoginUser} setIsloggedIn={setIsloggedIn}/>}/> 
      </Routes>
      
    </div>
  )
}

export default App
