import React from 'react'
import './ProfileMain.css'


import MainProfileLeft from '../../components/MainProfileLeft/MainProfileLeft'
import ProfileSideBar from '../../components/ProfileSideBar/ProfileSideBar'
import Posts from '../../components/Posts/Posts'
import Extras from '../../components/Extras/Extras'

function ProfileMain() {
    return (
        <div className="ProfileMain">
            <MainProfileLeft/>
        
            <div className="Profile-Center">
                <ProfileSideBar/>
                <Posts/>
            </div>
            <Extras/>
        </div>
    )
}

export default ProfileMain