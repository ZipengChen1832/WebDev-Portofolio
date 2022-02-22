import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';
import {MdWork, MdEmail} from 'react-icons/md';

export default function Sidebar() {
  return (
    <aside id='sidebar'>
        <div className="icons-container">
            {/* <li><span className='icon-text'>Home</span><AiFillHome/></li>
            <li><span className='icon-text'>About Me</span><FaUser/></li>
            <li><span className='icon-text'></span><MdWork/></li>
            <li><span className='icon-text'></span><MdEmail/></li> */}
            <Icon text='HOME'><AiFillHome className='icon'/></Icon>
            <Icon text='ABOUT ME'><FaUser className='icon'/></Icon>
            <Icon text='PORTFOLIO'><MdWork className='icon'/></Icon>
            <Icon text='CONTACT ME'><MdEmail className='icon'/></Icon>
        </div>
        <Outlet/>
    </aside>
  )
}

function Icon({children,text}){
    const [display,setDisplay] = useState(false);

    function mouseIn(e){
      setDisplay(true);
      e.currentTarget.querySelector(".icon").style.backgroundColor = '#ffb400';
    
      // e.currentTarget.style.backgroundColor = "red";
    }
    
    function mouseOut(e){
      setDisplay(false);
      e.currentTarget.querySelector(".icon").style.backgroundColor = '#2b2a2a';
    }

    return <li onMouseEnter={mouseIn} onMouseLeave={mouseOut} 
    className={`icon-container ${display && 'transition'}`}>
        {/* {display && <span>{text}</span>} */}
        <span>{text}</span>
        {/* <span className="icon">{children}</span> */}
        {children}
    </li>
}