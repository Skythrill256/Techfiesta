import React from 'react'
import Image from 'next/image'
import Home from '../../../assets/home.svg'
import Transaction from '../../../assets/transaction.svg'
import Profile from '../../../assets/profile.svg'
import './navbar.css'
const navbar = (props) => {
  return (
    <div className="nav">
	<ul>
	<li>
		<a href={props.homeLink}>
			
		<i ><Image
      src={Home}
      width={50}
      height={50}
	  alt='home'
      className=' '
      /></i>
		</a>
	</li>
	<li>
		<a href={props.transactionLink}>
			<i ><Image
      src={Transaction}
      width={100}
      height={100}
	  alt='home'
      className=' '
      /></i>
			
		</a>
	</li>	
	<li>
		<a href={props.profileLink}>
			<i><Image
      src={Profile}
      width={50}
      height={50}
      className=' '
	  alt='home'
      /></i>
			
		</a>
	</li>
	
</ul>
</div>


  )
}

export default navbar