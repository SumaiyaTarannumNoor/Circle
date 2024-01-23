import React from 'react'
import './ProfileMain.css'


import MainProfileLeft from '../../components/MainProfileLeft/MainProfileLeft'
import ProfileSideBar from '../../components/ProfileSideBar/ProfileSideBar'
import Posts from '../../components/Posts/Posts'

function ProfileMain() {
    return (
        <div className="ProfileMain">
            <MainProfileLeft/>

            <div className="Profile-Center">
                <ProfileSideBar/>
                <Posts/>
            </div>
        </div>
    )
}

export default ProfileMain