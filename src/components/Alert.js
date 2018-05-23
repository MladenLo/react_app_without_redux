import React from 'react'

import './Alert.css'

const Alert = (props) => {
  return (
    <div className="alert-box">
      <p className="alert-box__message">Post "{props.post.title}" has been saved.</p>
    </div>
  )
}

export default Alert
