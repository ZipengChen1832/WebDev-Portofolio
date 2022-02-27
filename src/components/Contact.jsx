import React from 'react'
import {MdEmail} from 'react-icons/md'
import {IoMdCall, IoIosSend} from 'react-icons/io'
import {BsGithub, BsLinkedin} from "react-icons/bs"
import { Outlet, useNavigate } from 'react-router-dom'

export default function Contact() {

  const navigate = useNavigate();
  function handleSubmit(){
    navigate("thankyou");
  }

  return (
    <main id='contact'>
      <div className='shadow'>
        CONTACT
        <h1>GET IN <span>TOUCH</span></h1>
      </div>
      <div className='contact-section'>
        <div className="contact-info">
          <div className="title">Don't Be Shy!</div>
          <p>
            Feel free to get in touch with me. I am always open to discussing new projects, 
            creative ideas or opportunities to be part of your visions.
          </p>
          <div className='email-me contact-method'>
            <MdEmail className='icon'/>
            <div>
              <div className='action'>EMAIL ME</div>
              <div className="myemail">zipengchen1832@gmail.com</div>
            </div>
          </div>
          <div className="call-me contact-method">
            <IoMdCall className='icon'/>
            <div>
              <div className='action'>CALL ME</div>
              <div className="myphone">(951) - 337 - 2398</div>
            </div>
          </div>
          <div className="social-media">
            <BsGithub className='icon' onClick={()=>{window.open('https://github.com/zipengchen1832')}}/>
            <BsLinkedin className='icon' onClick={()=>{window.open('https://www.linkedin.com/in/brandon-chen-41090a20a/')}}/>
          </div>
          
        </div>


        <form action="https://formsubmit.co/zipengchen1832@gmail.com" method='POST' 
        className="contact-form" onSubmit={handleSubmit}>
          <div className='first-line'>
            <input className='name' name='name' placeholder='YOUR NAME' required/>
            <input className='email' name='email' placeholder='YOUR EMAIL' required/>
          </div>
          <div className='subject-line'>
            <input className='subject' name='_subject' placeholder='YOUR SUBJECT' required/>
          </div>
          <textarea className='message' name='message' placeholder='YOUR MEESAGE' required></textarea>
          {/* some other functionalities */}
          <input type="hidden" name="_captcha" value="false"></input>
          <button className='send'>
            <span>SEND MESSAGE</span>
            <IoIosSend className='icon'/>
          </button>
        </form>
      </div>
      <Outlet/>
    </main>
  )
}

