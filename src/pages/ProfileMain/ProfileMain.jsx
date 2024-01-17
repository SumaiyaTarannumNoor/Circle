import React from 'react'

import './ProfileMain.css'
import ProfileLeftSide from '../../components/ProfileLeftSide/ProfileLeftSide'

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeftSide/>
      <div className="middle">middle</div>
      <div className="right">right</div>
    </div>
  )
}

export default Profile