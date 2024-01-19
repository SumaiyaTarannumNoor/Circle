import React from 'react'
import './MainProfileLeft.css'
import Search from '../search/Search'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const MainProfileLeft = () => {
  return (
    <div className="MainProfileLeft">
        <Search/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default MainProfileLeft