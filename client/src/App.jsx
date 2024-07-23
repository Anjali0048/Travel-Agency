import './App.css'
import {Routes, Route} from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Dashboard from './Pages/Dashboard';
import DestinationForm from './components/DestinationForm';
import Navbar from './components/Navbar';
import DestinationCard from './components/DestinationCard';
import DestinationPage from './Pages/DestinationPage';
import DestinationDetail from './components/DestinationDetail';

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
    <div className='min-w-screen min-h-screen bg-slate-100'>
      <Navbar/>
      <Routes>
        {/* <Route exact path="/" element={loggedIn?<Dashboard isloggedIn={isloggedIn} loggedIn={loggedIn}/>:<Login setLoginUser={setLoginUser} setIsloggedIn={setIsloggedIn}/>}/> */}

        <Route path="/" element={<Dashboard userDetails={userDetails}/>}/> 
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/login" element={<Login setLoginUser={setLoginUser} setIsloggedIn={setIsloggedIn}/>}/> 
        <Route path="/destinationForm" element={<DestinationForm/>}/>
        <Route path="/getDestinations" element={<DestinationPage/>}/>
        <Route path="/destination/:id" element={<DestinationDetail/>}/>
      </Routes>
      
    </div>
  )
}

export default App
