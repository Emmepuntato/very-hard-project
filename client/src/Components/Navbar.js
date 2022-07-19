import React, { useState, useEffect, useRef } from 'react'
import Menu from './Menu'
function Navbar() {
  const [size, setSize] = useState('')
  const navbar = useRef()

  useEffect(() => {}, [])
  return (
    <nav>
      <div className='header' ref={navbar}>
        {size}
        <div className='nav-logo'>logo</div>
        <Menu />
        <div className='nav-links'>links</div>
      </div>
    </nav>
  )
}

export default Navbar
