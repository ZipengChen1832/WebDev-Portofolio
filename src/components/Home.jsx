import React from 'react'
import { useNavigate } from 'react-router-dom';

import {AiOutlineArrowRight} from "react-icons/ai";
import {BsGithub, BsLinkedin, BsCodeSlash} from "react-icons/bs";


export default function Home() {
    const navigate = useNavigate();

  return (
    <main id="home">
        <div className='shape'></div>
        <div className='hero'>
            <div className="profile-pic"> 
                {/* <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img> */}
                <img src='/images/avatar.png' alt='avatar'></img>
            </div>
            <BsCodeSlash className='slash-icon'/>
            <div className="self-intro">
                <div className="title-section">
                    <h1>I'm Brandon Chen<div>Web Developer</div></h1>
                </div>
                <p>I am a web developer focused on creating clean and user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me</p>
                <div className="btn-container">
                    <button className='btn' onClick={()=>{navigate('portfolio')}}>
                        <span>My Portfolio</span>
                        <AiOutlineArrowRight className='arrow-icon'/>
                    </button>
                    <button className='btn' onClick={()=>{
                        window.open("files/resume.pdf")
                    }}>
                        <span>My Resume</span>
                        <AiOutlineArrowRight className='arrow-icon'/>
                    </button>
                </div>
                <div className="social-media">
                    <BsGithub onClick={()=>{window.open('https://github.com/zipengchen1832')}}/>
                    <BsLinkedin onClick={()=>{window.open('https://www.linkedin.com/in/brandon-chen-41090a20a/')}}/>
                </div>
            </div>
        </div>
    </main>
  )
}
