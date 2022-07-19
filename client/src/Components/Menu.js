import React from 'react'
import data from '../local-data/menu'

export default function Menu() {
  return (
    <div className='nav-menu'>
      <ul className='menu'>
        {data.menu.map((item, index) => {
          return <li key={index}>{item.type}</li>
        })}
      </ul>
    </div>
  )
}
