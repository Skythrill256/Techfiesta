import React from 'react'
import Image from 'next/image'
import './page.css'
import Consumer from '../../assets/Consumer.svg'
import Profile from '../../assets/sourceprofile.svg'
import Navbar from '../components/navbar/navbar.js'
import Button from  '../components/button/button'
const page = () => {
  return (
    <div className='maincontainer'>
      <Image
      src={Consumer}
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
        <label>Add Emal</label>
        <input type='email' className='input' placeholder='Enter the details'/>
      </div>
     <Button title="Add"/>
      <Navbar/>
    </div>
    
  )
}

export default page