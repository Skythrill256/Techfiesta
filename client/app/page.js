import React from 'react'
import './page.css'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import head from '../assets/ledflow.svg'
import Button from './components/button/button'
const page = () => {
  return (
    <div className='maincontainer'id='main'>
      <div className='logo'>
      <Image
      src={logo}
      width={500}
      height={500}
      
    />
        
        </div>
        <div className='heading'>
        <Image
      src={head}
      width={500}
      height={500}
      
    />
        </div>
        <a href='/splashscreen'>
          <Button title="Get Started"/>
        
        </a>
      </div>

    
  )
}

export default page