import React, { useState } from 'react'
import Logo from '../../img/logo.png'
import {useDispatch, useSelector} from 'react-redux'
import { login, signup } from '../../actions/authAction';

import './Auth.css'

const Auth = () => {
  
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authReducer.loading)
  const [isSignup, setIsSignup] = useState(true);
  const [data, setData] = useState(
    {firstname: '', 
    lastname: '', 
    password: '', 
    confirmpass: '', 
    username: ''})

  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignup) {
      data.password === data.confirmpass 
      ? dispatch(signup(data)) 
      : setConfirmPass(false)
    } else {
      dispatch(login(data))
    }
  }

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: '', 
      lastname: '', 
      password: '', 
      confirmpass: '', 
      username: ''
    })
  }

  return (

    <div className="Auth">
      {/* Left Side */}
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>Casey Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

        {/* Right Side */}
        <div className="a-right">
            <form className="infoForm authForm" onSubmit={handleSubmit}>


                <h3>{isSignup ? "Sign Up" : "Log In"}</h3>

                {isSignup &&
                <div>
                    
                    <input 
                      type="text" 
                      placeholder='First Name' 
                      className='infoInput' 
                      name='firstname' 
                      onChange = {handleChange}
                      value = {data.firstname}
                    />

                    <input 
                      type="text" 
                      placeholder='Last Name' 
                      className='infoInput' 
                      name='lastname'
                      onChange = {handleChange}
                      value = {data.lastname}
                    /> 
                    
                </div>
                }

                <div>
                    <input 
                    type="text" 
                    className="infoInput"
                    name='username'
                    placeholder='Username'
                    onChange = {handleChange}
                    value = {data.username}
                    />
                </div>

                <div>
                    <input 
                    type="password" 
                    className="infoInput"
                    name='password'
                    placeholder='Password'
                    onChange = {handleChange}
                    value = {data.password}
                    />
                
                    {isSignup &&
                    <input 
                    type="password" 
                    className="infoInput"
                    name='confirmpass'
                    placeholder='Confirm Password'
                    onChange = {handleChange}
                    value = {data.confirmPass}
                    />}
                </div>

                <span 
                  style={{
                    display: confirmPass ? "none" : "block", 
                    color: "red", 
                    fontSize: "12px", 
                    alignSelf: "flex-end", 
                    marginRight: "5px" 
                  }}
                  >
                  * Confirm Password is not the same
                </span>

                <div>
                    <span style={{fontSize: '12px', cursor: "pointer"}} onClick={()=> {setIsSignup((prev)=>!prev); resetForm()}}>
                      {isSignup ? "Already have an account? Login!" : "Don't have an account? Sign up!"}
                    </span>
                </div>

                <button className='button infoButton' type='submit' disabled={loading}>
                  {loading ? "Loading..." : isSignup ? "Signup" : "Login"}
                </button>


            </form>
        </div>

    </div>
  )
};

export default Auth