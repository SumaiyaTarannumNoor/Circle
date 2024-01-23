import React from 'react'
import Cover from '../../img/cover.jpg'
import ProfileImage from '../../img/img1.jpg'
import './ProfileSideBar.css'

const ProfileSideBar = () => {

  const ProfilePage = true;
    
  return (
    <div className="ProfileSideBar">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={ProfileImage} alt="" />
        </div>

        <div className="ProfileDescription">
            <span>Uzumaki Naruto</span>
            <span>Forever GENIN</span>
        </div>

        <div className="FollowStatus">
            <hr />
            <div>
            <div className="Follow">
                <span>Follower</span>
                <span>4</span>
            </div>
            <div className="VerticalLine"></div>
            <div className="Follow">    
                <span>Following</span>
                <span>Uchiha Sasuke</span>
            </div>

            {ProfilePage && (
                <>
                <div className="VerticalLine"></div>
                <div className="Follow">
                    <span>1</span>
                    <span>Posts</span>
                </div>
                </>
            )}

            </div>
            <hr />
          

        </div>
        {ProfilePage? '': <span>My Profile</span>}
        
    </div>
  )
}

export default ProfileSideBar
