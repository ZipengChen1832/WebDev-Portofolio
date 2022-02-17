import React from 'react'

import {BsFillArrowRightCircleFill} from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Home() {
  return (
    <main id="home">
        <div className='shape'></div>
        <div className='hero'>
            <div className="profile-pic">
                <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className="self-intro">
                <div className="title-section">
                    <h1>I'm Brandon Chen<div>Web Developer</div>
                    </h1>
                </div>
                <p>I am a front-end developer focused on creating clean and user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me</p>
                <div className="btn-container">
                    <button className='portfolio-btn btn'>
                        <span>My Portfolio</span>
                        <BsFillArrowRightCircleFill className='arrow icon'/>
                    </button>
                    <button className='about-me btn'>
                        <span>Aboue Me</span>
                        <BsFillArrowRightCircleFill className='arrow icon'/>
                    </button>
                    <button className='resume-btn btn'>
                        <span>My Resume</span>
                        <BsFillArrowRightCircleFill className='arrow icon'/>
                    </button>
                </div>
            </div>
        </div>
    </main>
  )
}
