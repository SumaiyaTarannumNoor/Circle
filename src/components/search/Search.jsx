import React from 'react'
import Logo from '../../img/logo.png'
import './Search.css'
import {UilSearch} from '@iconscout/react-unicons'

const Search = () => {
  return (
    <div className="Search">
        <img src={Logo} alt="" id='Logo'/>
        <div className="SearchBar">
          <input type="text" placeholder='ExploreMore' id='Bar' />
          <div className="SearchIcon">
            <UilSearch/>
          </div>
        </div>
    </div>
  )
}

export default Search