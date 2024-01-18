import React from 'react'
import './ProfileLeftSide.css'
import Search from '../search/Search'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard'


const ProfileLeftSide = () => {
  return (
    <div className="ProfileLeftSide">
        <Search/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeftSide