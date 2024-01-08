import React from 'react'

import './Home.css'
import Profile from '../../components/profile/Profile'
import Posts from '../../components/Posts/Posts'
import Extras from '../../components/Extras/Extras'

const Home = () => {
  return (
    <div className="Home">
        <Profile/>
        <Posts/>
        <Extras/>
    </div>
  )
}

export default Home