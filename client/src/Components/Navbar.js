import React, { useState, useEffect, useRef } from 'react'
import { BiMenu } from 'react-icons/bi'

import Menu from './Menu'
function Navbar() {
  const [isSidebar, setIsSidebar] = useState(false)
  const navbar = useRef()

  useEffect(() => {}, [])
  return (
    <nav>
      <div className='header' ref={navbar}>
        <div className='nav-logo'>logo</div>
        <Menu />
        <div className='nav-links'>links</div>
        <BiMenu
          className={`${isSidebar ? 'sidebar-icon-show' : 'sidebar-icon'}`}
          onClick={() => {
            setIsSidebar(!isSidebar)
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar
