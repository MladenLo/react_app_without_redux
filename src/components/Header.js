import React from 'react'

import Menu from './Menu'

import './Header.css'

const Header = () => {
  return (
    <div>
        <header className="main-header">
          <h1 className="main-header__title">React app without Redux</h1>
          <Menu />
        </header>
    </div>
  )
}

export default Header
