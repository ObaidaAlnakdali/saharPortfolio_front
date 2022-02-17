import React from 'react'
import './Form.css'

const ContactUS = () => {
    return (
        <div>
            <form className='contactForm'>
                <h1 className='headercontact'>contact me</h1>
                <div className="input-wrapper">
                    <label className='email' >
                        Email <br />
                        <input type='email' placeholder='Enter your Email' className='marg' id='radius' ></input></label>
                    <label className='subject' >
                        Subject <br />
                        <input type='text' placeholder='Enter subject' className='marg' id='radius' ></input></label>
                </div>
                <textarea placeholder='enter your messages' id='radius'></textarea>
                <button className='send'>send</button>
            </form>
        </div>
    )
}

export default ContactUS