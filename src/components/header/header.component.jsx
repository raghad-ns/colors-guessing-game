import './header.css'
import React from 'react'

const Header = (props) => {
  return (
    <div className='websiteHeader'>
      <span className='title'>Colors Game</span>
      <span>steps : {props.steps}</span>
      {
        props.win === true &&
          <div className="replay">
            <span>Congratulation you guess it</span>
            <button onClick={props.reset}>play again</button>
          </div> 
      }
    </div>
  )
}

export default Header