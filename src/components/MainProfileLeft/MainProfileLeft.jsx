import React from 'react'
import Search from '../search/Search'
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