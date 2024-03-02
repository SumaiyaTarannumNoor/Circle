import React, {useState} from 'react'
import './Extras.css'

import Home from "../../img/home.png"
import Notification from "../../img/noti.png"
import Comment from "../../img/comment.png"
import {UilSetting} from '@iconscout/react-unicons'
import {UilPen} from '@iconscout/react-unicons'
import Trending from '../Trending/Trending'
import ShareModal from '../ShareModal/ShareModal'

const Extras = () => {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="Extras">
        <div className="NavBarIcon">
            <img src={Home} alt=""/>
            <img src={Notification} alt=""/>
            <img src={Comment} alt=""/>
            <UilSetting/>
        </div>

        <Trending/>

        <div>
        <button className="button ExtraButton" width='1.6rem' height='1.6rem' onClick={() => setModalOpened(true)}><h3>SHARE</h3> </button>
                <ShareModal 
                modalOpened = {modalOpened}
                setModalOpened = {setModalOpened}/>
        </div>
    </div>
  )
}

export default Extras