import React from 'react'
import Search from '../search/Search'
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar'
import "./Profile.css"

const Profile = () => {
  return (
    <div className="Profile">
        <Search/>
        <ProfileSideBar/>
    </div>
  )
}

export default Profile