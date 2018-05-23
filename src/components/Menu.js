import React from 'react'
import { Link } from "react-router-dom";

import './Menu.css'

const Menu = () => {
  return (
    <menu className="main-menu">
      <ul className="main-menu__list">
        <li className="main-menu__item"><Link className="main-menu__link" to="/">Posts</Link></li>
        <li className="main-menu__item"><Link className="main-menu__link" to="/add">Add Post</Link></li>
      </ul>
    </menu>
  )
}

export default Menu
