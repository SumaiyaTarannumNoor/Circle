import React from 'react'
import './Extras.css'

import Home from "../../img/home.png"
import Notification from "../../img/noti.png"
import Comment from "../../img/comment.png"
import {UilSetting} from '@iconscout/react-unicons'
import Trending from '../Trending/Trending'

const Extras = () => {
  return (
    <div className="Extras">
        <div className="NavBarIcon">
            <img src={Home} alt=""/>
            <img src={Notification} alt=""/>
            <img src={Comment} alt=""/>
            <UilSetting/>
        </div>

        <Trending/>
    </div>
  )
}

export default Extras