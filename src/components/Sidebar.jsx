import React from 'react'
import { Outlet } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';
import {MdWork, MdEmail} from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  
  return (
    <aside id='sidebar'>
        <ul className="icons-container">
            <Icon url='/' text='HOME'><AiFillHome className='icon'/></Icon>
            <Icon url='/portfolio' text='PORTFOLIO'><MdWork className='icon'/></Icon>
            <Icon url='/about' text='ABOUT ME'><FaUser className='icon'/></Icon>
            <Icon url='/contact' text='CONTACT ME'><MdEmail className='icon'/></Icon>
        </ul>
        <Outlet/>
    </aside>
  )
}

function Icon({children,text,url}){
    const navigate = useNavigate();
    const location = useLocation();

    function redirect(){
      navigate(url);
    }

    return <li onClick={redirect} className={`icon-container ${location.pathname===url && 'selected'}`}>
        <span>{text}</span>
        {children}
    </li>
}