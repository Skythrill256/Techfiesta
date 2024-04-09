"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import './page.css'
import Source from '../../assets/Source.svg'
import Profile from '../../assets/sourceprofile.svg'
import Navbar from '../components/navbar/navbar.js'
import Button from '../components/button/button'





const page = () => {
  const [scannerOpened, setScannerOpened] = useState(false);
  function openCloseQR(data) {
    setScannerOpened(!scannerOpened);
  }
  return (
    <div className='relative  w-full h-screen top-[0] flex flex-col items-center justify-center'>
      {
        !scannerOpened && 
        <div className='h-screen'>

          <div className='flex flex-col justify-center items-center gap-4 mb-4 w-full'>

            <Image
              src={Source}
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

          <div className='flex  gap-3 flex-col justify-center container items-center text-center placeholder:text-[1rem] placeholder:p-2'>
            <label>Add Name</label>
            <input type='text' className='input' placeholder='Enter the details' />
            <label>Add Location</label>
            <input type='text' className='input' placeholder='Enter the details' />
            <label>Add Email</label>
            <input type='email' className='input' placeholder='Enter the details' />
          <a href='/sourceregister'><Button title="Add" /></a>
          </div>
        </div>
      }
     
    </div>

  )
}

export default page