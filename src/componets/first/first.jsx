import React from 'react'
import '../first/first.css'
import logo from '../../assets/Group5.svg'
import head from '../../assets/ledflow.svg'
import second from '../splashscreen/second'
const first = () => {
  return (
    <div className='maincontainer'id='main'>
      <div className='logo'>
        <img className='img' src={logo}/>
        
        </div>
        <div className='heading'>
          <img className='head ' src={head}/>
        </div>
        <a href='#splash'>
          <div className='button'>
          Get Started
        </div>
        </a>
      </div>

    
  )
}

export default first