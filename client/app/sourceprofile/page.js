import React from 'react'
import Image from 'next/image'
import './page.css'
import Source from '../../assets/Source.svg'
import Profile from '../../assets/sourceprofile.svg'
import Navbar from '../components/navbar/navbar.js'
import Button from  '../components/button/button'
const page = () => {
  return (
    <div className='maincontainer'>
      <Image
      src={Source}
      width={500}
      height={500}
      className='source'
    />
    <Image
      src={Profile}
      width={200}
      height={180}
      className='profile'
    />
      
      <div className='container'>
        <label>Add Name</label>
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