import React from 'react'
import './MailList.css'
import { Button } from '@mui/material'

function MailList() {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save Time,Save Money</h1>
        <span className="mailDesc">Sign Up and We'll send the best deals to You</span>
        <div className="mailInputContainer">
            <input type='text' placeholder='Your Email'/>
            <Button>Subscribe</Button>
        </div>
    </div>
  )
}

export default MailList