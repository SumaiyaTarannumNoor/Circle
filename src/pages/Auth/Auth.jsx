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
      {/* <LogIn/> */}
    </div>
  )
}

function LogIn(){
  return(
    <div className="AuthRight">
      <form className="InfoForm AuthForm">
        <h4>LogIn</h4>
        <div>
          <input type="text" placeholder='UserName' className='InfoInput' name='username'/>
        </div>
        <div>  
          <input type="text" placeholder='Password' className='InfoInput' name='password'/>
        </div>
        <div>
          <span style={{fontSize: '14px', fontFamily:'fantasy'}}>Don't have an account! SignUp</span>
        </div>

        <button className="button InfoButton" type='submit'>LogIn</button>

      </form>
    </div>
  )
}

function SignUp(){
  return(
    <div className="AuthRight">
      <form className="InfoForm AuthForm">
        <h4>Sign Up</h4>
        <div>
          <input type="text" placeholder='First Name' className='InfoInput' name='firstname'/>
          <input type="text" placeholder='Last Name' className='InfoInput' name='lastname'/>
        </div>
        <div>
          <input type="text" placeholder='UserName' className='InfoInput' name='username'/>
        </div>
        <div>
          <input type="text" placeholder='Password' className='InfoInput' name='password'/>
          <input type="text" placeholder='Confirm Password' className='InfoInput' name='confirmpassword'/>
        </div>

        <div>
          <span style={{fontSize: '14px', fontFamily:'fantasy'}}>Already have an account! LogIn</span>
        </div>

        <button className="button InfoButton" type='submit'>SignUp</button>

      </form>
    </div>
  )
}

export default Auth

