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
    </div>
  )
}

export default Auth