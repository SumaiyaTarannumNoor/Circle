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
                <div className="Options" style={{color:"var(--photo)"}}>
                    <UilScenery/>
                    Photo
                </div>
                <div className="Options" style={{color:"var(--video)"}}>
                    <UilPlayCircle/>
                    Video
                </div><div className="Options" style={{color:"var(--location)"}}>
                    <UilLocationPoint/>
                    Location
                </div><div className="Options" style={{color:"var(--schedule)"}}>
                    <UilSchedule/>
                    Schedule
                </div>
                <button className="button share-button">Share</button>
            </div>
        </div>
    </div>
  )
}

export default PostShare