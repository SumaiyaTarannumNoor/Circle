import React from 'react'
import './SharedPosts.css'
import { PostsData } from '../Data/PostsData'

const SharedPosts = () => {
  return (
    <div className="SharedPosts">
        {PostsData.map((posts, id)=>{
            return <Post/>
        })}
    </div>
  )
}

export default SharedPosts