import React, { useState,useRef,useEffect} from 'react'
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import {toast} from 'react-hot-toast'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrectpassword, setIsCorrectPassword] = useState(false);
  
  const [user, setUser] = useState({
    email:"",
    name:"",
    password:"",
    confirmPassword:"",
  })

// useEffect(() => {
//   userRef.current.focus();
// }, [])


const navigate = useNavigate();

const handleChange =(e)=>{
  const{name,value} = e.target;
  setUser({
    ...user,
    [name]:value,
  })
}

const handleSignUp = async(e)=>{
  setIsClicked(true)
  console.log(user.email);
  e.preventDefault();
    try{
      const {name,email,password,confirmPassword} = user;
      if(name && email && password === confirmPassword){
      const X = {...user} 
      await axios.post(`http://localhost:3001/api/auth/signup`,X)
        .then(res =>{
          navigate("/login");
          setSuccess(true);
          toast.success("Account created Please Login");
          setUser.name('');
          setUser.email('');
          setUser.password('');
          setUser.confirmPassword('');
          setIsClicked(false)
        })
      }
      else{
        alert("please fill all the fields");
        setIsClicked(false)
      }
    }catch(err){
      console.log("Error from Signup Page", err)
    // errRef.current.focus();
setIsClicked(false)
  }
}

useEffect(() => {
    setIsCorrectPassword(user.password === user.confirmPassword);
  }, [user.confirmPassword])

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className="md:w-1/3 max-w-sm">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Sign Up</p>
        </div>


          <form onSubmit={handleSignUp}>

            <div className='mt-2'>
              <label htmlFor="Name" className='text-white'>
                Name
              </label>
              <input 
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" 
                type="text" 
                name="name" 
                onChange={handleChange}
                value={user.name}
                placeholder="Enter Name"
                autoComplete="off" 
                required
              />
              </div>

              <div className='mt-2'>
              <label className='text-white'>Email
                </label>
              <input 
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" 
              name="email" 
              id='email'
              ref={userRef}
              onChange={handleChange}
              value={user.email}
              type="text" 
              placeholder="Email Address" 
              autoComplete="off" 
              required
              />
            </div>
            
            <div className='mt-2 relative'>
              <label className='text-white'>
                Password
              </label>
              <input 
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" 
              name="password" 
              id="password"
              onChange={handleChange}
              value={user.password}
              type={showPassword ? ("text"):("password")} 
              placeholder="Password"
              required
              />

              <span className="absolute right-3 top-[30px] cursor-pointer" onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
              </span>

            </div>

            <div className='mt-2 relative'>
              <label className='text-white'>
                Confirm Password
              </label>
              <input 
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" name="confirmPassword" 
                id="confirm_pwd"
                onChange={handleChange}
                value={user.confirmPassword}
                type={showConfirmPassword ? ("text"):("password")}
                placeholder="Confirm Password"
                required
              />

                <span className="absolute right-3 top-[30px] cursor-pointer" onClick={()=> setShowConfirmPassword((prev)=> !prev)}>
                {showConfirmPassword? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

              {!isCorrectpassword && <p id="confirmnote" className="text-white" >
                Must match the first password input field.
              </p>}
            </div>

            <div className="text-center md:text-left">
              <button 
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" 
              type="submit">
                {
                  isClicked?(
                    "Signing up.."
                  ):(
                    "Sign Up"
                  )
                }                
                </button>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Already have account? <Link to="/login" className="text-red-600 hover:underline hover:underline-offset-4">Sign In</Link>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Signup
