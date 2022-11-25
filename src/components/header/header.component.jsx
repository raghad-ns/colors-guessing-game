import './header.css'
import React from 'react'

const Header = (props) => {
  return (
    <div className='websiteHeader'>
        <span className='title'>Colors Game</span>
        <span>steps : {props.steps}</span>
    </div>
  )
}

export default Header