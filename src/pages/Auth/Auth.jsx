import React, {useState} from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="Auth">
       {/* Left Side */}
      <div className="AuthLeft">
        <img src={Logo} alt="" />
        <div className="WebName">
          <h1>Circle</h1>
          <h4>Let's Ruin Your Life with Us!!!</h4>
        </div>
      </div>

      {/* Right Side */}
      <div className="AuthRight">
      <form className="InfoForm AuthForm">
        <h4>{isSignUp ? "Sign Up" : "Log In"}</h4>
        {isSignUp && (
      
            <div>
              <input type="text" placeholder="First Name" className="InfoInput" name="firstname" />
              <input type="text" placeholder="Last Name" className="InfoInput" name="lastname" />
            </div>
        )}

            <div>
              <input type="text" placeholder="UserName" className="InfoInput" name="username" />
            </div>
            <div>
              <input type="password" placeholder="Password" className="InfoInput" name="password" />

              {isSignUp && (
                <input type="password" placeholder="Confirm Password" className="InfoInput" name="confirmpassword" />
              )}
              
            </div>


        <div>
          <span style={{fontSize: '14px', fontFamily:'fantasy'}}>Already have an account! LogIn</span>
        </div>

        <button className="button InfoButton" type='submit'>
          {isSignUp ? "SignUp" : "Log In"}
          </button>

      </form>
    </div>
    </div>
  )
}


export default Auth

