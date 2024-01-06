import React from 'react'
import Search from '../search/Search'
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar'
import "./Profile.css"
import FollowersCard from '../FollowersCard/FollowersCard'

const Profile = () => {
  return (
    <div className="Profile">
        <Search/>
        <ProfileSideBar/>
        <FollowersCard/>
    </div>
  )
}

export default Profile