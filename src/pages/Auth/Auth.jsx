import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
      <div className="AuthLeft">
        <img src={Logo} alt="" />
        <div className="WebName">
          <h1>Circle</h1>
          <h4>Let's Ruin Your Life with Us!!!</h4>
        </div>
      </div>
      
      <SignUp/>
    </div>
  )
}

function SignUp(){
  return(
    <div className="AuthRight">
      <form className="InfoForm">
        <h4>Sign Up</h4>
        <div>
          <input type="text" placeholder='First Name' className='InfoInput' name='FirstName'/>
          <input type="text" placeholder='Last Name' className='InfoInput' name='LastName'/>
        </div>
      </form>
    </div>
  )
}

export default Auth

