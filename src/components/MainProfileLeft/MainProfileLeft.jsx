import React from 'react'
import Search from '../Search/Search'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const MainProfileLeft = () => {
  return (
    <div className="Profile">
        <Search/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default MainProfileLeft