import React from 'react'
import { useGlobalContex } from '../Context'
import { Link } from 'react-router-dom'

function Sidebar({ isSidebar }) {
  const { data } = useGlobalContex()
  return (
    <div id={`${isSidebar ? 'sidebar' : null}`}>
      <ul className='sidebar-menu'>
        {data.menu.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.link}>{item.type}</Link>
            </li>
          )
        })}
      </ul>
      <div id='sidebar-social'>
        <ul id='social-icons'>
          {data.links.map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  border: 'none',
                  width: '1rem',
                  height: '1rem',
                  margin: '1rem',
                  padding: '1rem',
                }}
              >
                <Link to={item.link}>{item.logo}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
