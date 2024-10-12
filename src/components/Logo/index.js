import React from 'react'
import './logo.css'

 function Logo({src , src2}) {
  return (
    <div className='logo'>
      <div className="img"><img src={src} alt="" /></div>
      <div className="head"><h1>FAR AWAY</h1></div>
      <div className="img"><img src={src2} alt="" /></div>
    </div>
  )
}
export default Logo