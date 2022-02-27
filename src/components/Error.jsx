import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Error() {

    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            navigate("/");
        }, 3000);
    })

  return (
    <div id='error'>
        <h1>404 PAGE NOT FOUND!</h1>
        <div style={{'fontSize':'1.5rem'}}>redirecting to <a style={{'color':'#ffb400'}} href='/'>home page</a> ......</div>
    </div>
            
  )
}
