"use client"
import React, { useState } from 'react';
import "./page.css"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import QRCode from "qrcode"
import Source from '../../assets/Source.svg';
import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';

const Page = () => {
  const [productDescription, setProductDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [qrCodeImage, setQRCodeImage] = useState('');

  const handleChangeProductDescription = (e) => {
    setProductDescription(e.target.value);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToEncode = `Product Description: ${productDescription}, Quantity: ${quantity}`;
    try {
      const qrCodeDataURL = await QRCode.toDataURL(dataToEncode);
      setQRCodeImage(qrCodeDataURL);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div className='maincontainer'>
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <label>Product Description</label>
          <input
            type='text'
            className='input'
            placeholder='Enter the details'
            value={productDescription}
            onChange={handleChangeProductDescription}
          />
          <label>Quantity</label>
          <input
            type='text'
            className='input'
            placeholder='Enter the details'
            value={quantity}
            onChange={handleChangeQuantity}
          />
        </div>
        <button type="submit">Generate QR Code</button>
      </form>
      {qrCodeImage && <img src={qrCodeImage} alt="QR Code" />}
      <Navbar />
    </div>
  );
};

export default Page;

