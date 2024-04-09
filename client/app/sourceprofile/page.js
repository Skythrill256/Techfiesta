import React from 'react'
import Image from 'next/image'
import './page.css'
import Source from '../../assets/Source.svg'
import Profile from '../../assets/sourceprofile.svg'
import Navbar from '../components/navbar/navbar.js'
import Button from  '../components/button/button'
const page = () => {
  return (
    <div className='maincontainer '>
      <div className='flex flex-col items-center mb-8 mt-10'>

      <Image
      src={Source}
      width={300}
      height={300}
      className='source m-8 '
      />
      <Image
      src={Profile}
      width={300}
      height={300}
      className='source  m-8'
      />
    
      </div>
      
      <div className='my-8  flex flex-col items-center container '>
        <b><label>Add Name</label></b>
        <input type='text' className='input' placeholder='Enter the details'/>
        <label>Add Location</label>
        <input type='text' className='input' placeholder='Enter the details'/>
        
        
      </div>
     <a href='/sourceregister'><Button title="Add"/></a>
      <Navbar/>
    </div>
    
  )
}

export default page