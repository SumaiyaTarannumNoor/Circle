import React from 'react'
import './Post.css'

import Like from "../../img/like.png"
import NotLike from "../../img/notlike.png"
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"

const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />

        <div className="PostReactions">
            <img src={data.liked? Like:NotLike} alt="" id='reactions'/>
            <img src={Comment} alt="" id='reactions'/>
            <img src={Share} alt="" id='reactions'/>
        </div>

        <span>{data.likes} likes</span>
        <div className="description">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post