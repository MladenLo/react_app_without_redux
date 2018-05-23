import React from 'react'

import loader from '../logo.svg'
import './Loader.css'

export default () => {
  return (
    <div className="loader">
      <img className="loader__logo" src={loader} alt="loader" />
    </div>
  )
}
