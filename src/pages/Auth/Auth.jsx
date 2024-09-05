import React, {useState} from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true)
  const [data, setData] = useState({firstname:"", lastname:"", password:"", confirmpassword:"", username:""})
  const [confirmPassword, setConfirmPassword] = useState(true)
  const handleChange = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

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
              <input type="text" placeholder="First Name" className="InfoInput" name="firstname" onChange={handleChange}/>
              <input type="text" placeholder="Last Name" className="InfoInput" name="lastname" onChange={handleChange}/>
            </div>
        )}

            <div>
              <input type="text" placeholder="UserName" className="InfoInput" name="username" onChange={handleChange}/>
            </div>
            <div>
              <input type="password" placeholder="Password" className="InfoInput" name="password" onChange={handleChange}/>

              {isSignUp && (
                <input type="password" placeholder="Confirm Password" className="InfoInput" name="confirmpassword" onChange={handleChange}/>
              )}
              
            </div>
            <span style={{display: confirmPassword? "none": "block"}}>* Confirm Password is not same.</span>

        <div>
          <span style={{fontSize: '16px', fontFamily:'fantasy', cursor: 'pointer'}} onClick = {()=>setIsSignUp((prev) => !prev)}>
            {isSignUp? "Already have an account. Log In!" : "Don't have an account? Sign Up"}</span>
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

