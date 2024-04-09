import React from 'react'
import Image from 'next/image'
import './page.css'
import Consumer from '../../assets/Consumer.svg'
import Profile from '../../assets/sourceprofile.svg'
import Navbar from '../components/navbar/navbar.js'
import Button from  '../components/button/button'
const page = () => {
  return (
    <div className='maincontainer h-screen w-fit'>
      <div className='flex flex-col justify-center items-center gap-8 mb-8 w-full'>

      <Image
      src={Consumer}
      width={300}
      height={300}
      className='source'
      />
    <Image
      src={Profile}
      width={200}
      height={180}
      className='profile'
      />
      </div>
      
      <div className='my-8 w-screen flex flex-col justify-center container '>
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