import React from 'react'
import './Trending.css'

import {TrendingData} from "../Data/TrendingData.js"

const Trending = () => {
  return (
    <div className="Trending">
        <h3>Things to waste you time on</h3>
        {TrendingData.map((trend)=>{
          return (
            <div className="TrendItem">
              <span>#{trend.name}</span>
              <span>{trend.shares}k shares</span>
            </div>
          )
        })}
    </div>
  )
}

export default Trending