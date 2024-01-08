import React from 'react'
import './Posts.css'
import PostShare from '../PostShare/PostShare'
import SharedPosts from '../SharedPosts/SharedPosts'

const Posts = () => {
  return (
    <div className="Posts">
        <PostShare/>
        <SharedPosts/>
    </div>
  )
}

export default Posts