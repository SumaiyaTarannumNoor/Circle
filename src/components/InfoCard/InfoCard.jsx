import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className='InfoCard'>
            <div className="InfoHeader">
                <h5>Things about YOU</h5>
                <UilPen/>
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

            <button className='button'>Log Out</button>
    </div>
  )
}

export default InfoCard