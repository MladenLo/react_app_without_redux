import React from 'react'
import { Link } from "react-router-dom";

import './Post.css'

 const Post = (props) => {
  return (
    <div className="post">
      <h3 className="post__title"><Link className="post__link" to={`/post/${props.post.id}`}>{props.post.title}</Link></h3>
      <p className="post__content">{props.post.body}</p>
    </div>
  )
}

export default Post


