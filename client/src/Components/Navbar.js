import React, { useState, useRef } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Sidebar from './Sidebar'

import Menu from './Menu'

function Navbar() {
  const [isSidebar, setIsSidebar] = useState(false)
  const navbar = useRef()

  return (
    <nav>
      <div className='header' ref={navbar}>
        <Link to='/' className='nav-logo'></Link>
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
