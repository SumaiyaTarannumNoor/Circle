import React from 'react'
import Search from '../Search/Search'
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