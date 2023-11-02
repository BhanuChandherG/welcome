import React, { useState } from 'react'
import "./welcome.css"
function Welcome() {
    const [isSubscribed, setSubscribed] = useState(false)
    const buttonName = isSubscribed? "Subscribed" : "Subscribe"
    const toggleButton = () =>{
        setSubscribed(isSubscribed => !isSubscribed)
    }
  return (
    <div>
         <div className="bg-container">
        <h1 className='heading'>Welcome</h1>
        <h3 className='para'> Thank You! Happy Learning</h3>
        <div className='but-cont'>
        <button className='button' onClick={toggleButton}>{buttonName}</button>
    </div>
    </div>
    </div>
  )
}

export default Welcome