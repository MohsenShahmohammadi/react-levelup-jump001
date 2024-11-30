import React from 'react'

const Navbar = ({setBackground}) => {
  return (
    <div className="navbar">
        <span>Photo editor</span>
        <input type="text" className="input" placeholder='Image Link' onChange={(e)=>{setBackground(e.target.value)}}/>
    </div>
  )
}

export default Navbar