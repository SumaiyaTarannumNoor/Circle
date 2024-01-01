import React from 'react'

import './Home.css'
import Profile from '../../components/profile/Profile'

const Home = () => {
  return (
    <div className="Home">
        <Profile/>
        <div className="Post">Posts</div>
        <div className="RightExtra">RightExtra</div>
    </div>
  )
}

export default Home