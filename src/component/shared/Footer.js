import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div>
        <footer>
          <div className='footer'>
            <h4>Sahar Chatah &copy;</h4>

            <ul>
              <a href="https://www.google.com">
                <FaFacebook className='facebook' color={"white"} id='photo' size={38} />
              </a>
              <a href="https://www.google.com">
                <FaInstagram className='instagram' color={"white"} id='photo' size={38} />
              </a>
              <a href="https://www.google.com">
                <FaLinkedin className='Linkedin' color={"white"} id='photo' size={38} />
              </a>
              <a href="https://www.google.com">
                <FaGithub className='Github' color={"white"} id='photo' size={38} />
              </a>
            </ul>

          </div>
        </footer>

      </div>
    </div>
  )
}

export default Footer