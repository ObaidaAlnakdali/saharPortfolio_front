import React from 'react'
import drawBG from './../../resources/images/drow.svg'
import womanImg from './../../resources/images/women.svg'
import './Header.css'

const Header = () => {
  return (
      <div className='header'>
        <img class="first-drow-img image" alt="" src={drawBG} />
        <div class="about">
          <p>Hello , my name is sahar chatah i am a full stack web developer with ton of experience in multiple
            stacks
            i can make your vision a Reality</p>
          <img alt='' src={womanImg} />
        </div>
      </div>
  )
}

export default Header;