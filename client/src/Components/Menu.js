import React from 'react'

import data from '../local-data/menu'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <div className='nav-menu'>
        <ul className='menu'>
          {data.menu.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>{item.type}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='nav-links' style={{ padding: 0 }}>
        <ul className='nav-links'>
          {data.links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>{item.logo}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
