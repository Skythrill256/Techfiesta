import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <div className="w-screen container ">
	<ul>
	<li>
		<a href="#">
			<i className="ai-home"></i>
			<span>home icon</span>
		</a>
	</li>
	<li>
		<a href="#">
			<i className="ai-image"></i>
			<span>tansaction icon</span>
		</a>
	</li>	
	<li>
		<a href="#">
			<i className="ai-file"></i>
			<span>profile icon</span>
		</a>
	</li>
	
</ul>
</div>


  )
}

export default navbar