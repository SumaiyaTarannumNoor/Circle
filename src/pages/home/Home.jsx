import React from 'react'

import './Home.css'
import Profile from '../../components/profile/Profile'
import Posts from '../../components/Posts/Posts'

const Home = () => {
  return (
    <div className="Home">
        <Profile/>
        <Posts/>
        <div className="RightExtra">RightExtra</div>
    </div>
  )
}

export default Home