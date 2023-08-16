import React from 'react'
import './Header.css'
import leftBtn from '../assets/images/left.png'
 const Header = ({title}) => {
  return (
  <div className="header">
    <img src={leftBtn} alt="" />
    <h2>{title}</h2>
  </div>
  )
}

export default Header