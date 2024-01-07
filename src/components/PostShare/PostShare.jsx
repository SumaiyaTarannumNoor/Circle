import React from 'react'
import './PostShare.css'
import ProfileImage from '../../img/img1.jpg'

import {UilScenery} from "@iconscout/react-unicons"
import {UilPlayCircle} from "@iconscout/react-unicons"
import {UilLocationPoint} from "@iconscout/react-unicons"
import {UilSchedule} from "@iconscout/react-unicons"

const PostShare = () => {
  return (
    <div className="PostShare">
        <img src= {ProfileImage} alt="" />
        <div>
            <input type="text" placeholder='Wanna say something???' />
            <div className="PostOptions">
                <div className="Options">
                    <UilScenery/>
                    Photo
                </div>
                <div className="Options">
                    <UilPlayCircle/>
                    Video
                </div><div className="Options">
                    <UilLocationPoint/>
                    Location
                </div><div className="Options">
                    <UilSchedule/>
                    Schedule
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostShare