import React, { useState, useEffect, useRef } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Sidebar from './Sidebar'

import Menu from './Menu'

function Navbar() {
  const [isSidebar, setIsSidebar] = useState(false)
  const navbar = useRef()

  useEffect(() => {}, [])
  return (
    <nav>
      <div className='header' ref={navbar}>
        <div className='nav-logo'>
          <Link to='/'>logo</Link>
        </div>
        <Menu />
        <div className='sidebar-icon'>
          <BiMenu
            className={`${isSidebar ? 'sidebar-icon-show' : 'sidebar-icon'}`}
            onClick={() => {
              setIsSidebar(!isSidebar)
            }}
          ></BiMenu>
          <Sidebar isSidebar={isSidebar} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
