import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {


  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className='InfoCard'>
            <div className="InfoHeader">
                <h5>Things about YOU</h5>
                <div>
                <UilPen width='1.6rem' height='1.6rem' onClick={() => setModalOpened(true)}/>
                </div>
            </div>

            <div className="information">
              <span>
                <b>Status</b>
              </span>
              <span>Forever Genin</span>
            </div>

            <div className="information">
              <span>
                <b>Lives in</b>
              </span>
              <span>Konoha</span>
            </div>

            <div className="information">
              <span>
                <b>Works at</b>
              </span>
              <span>Team 7</span>
            </div>

            <button className='button log-out'>Log Out</button>
    </div>
  )
}

export default InfoCard