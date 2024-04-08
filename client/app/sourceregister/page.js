import React from 'react'
import './page.css'
import Image from 'next/image'
import Source from '../../assets/Source.svg'
import Button from  '../components/button/button'
import Navbar from '../components/navbar/navbar'
const page = () => {
  return (
    <div className='maincontainer'>
      <Image
      src={Source}
      width={500}
      height={500}
      className='source'
    />
   
      
      <div className='container'>
        <label>Product Description</label>
        <input type='text' className='input' placeholder='Enter the details'/>
        <label>Quantity</label>
        <input type='text' className='input' placeholder='Enter the details'/>
      </div>
      <a href='/verified'><Button title="Send"/></a>
      <Navbar/>
    </div>
  )
}

export default page