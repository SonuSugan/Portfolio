import React from 'react'

import boy3 from '../Image/boy3.jpg'

import './FloatingDiv.css'

const FloatingDiv = () => {
  return (
<div className="floatingdiv">
    <img id='img1' src={boy3} alt="sonu" />
    <span >
        MERN  Developer
    </span>
    
</div>
    )
}

export default FloatingDiv