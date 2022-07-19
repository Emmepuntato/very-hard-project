import React from 'react'
import { useGlobalContex } from '../Context'

function Sidebar({ isSidebar }) {
  const { data } = useGlobalContex()
  return (
    <div id={`${isSidebar ? 'sidebar' : null}`}>
      <ul>
        {data.menu.map((item, index) => {
          return <li key={index}>{item.type}</li>
        })}
      </ul>
    </div>
  )
}

export default Sidebar
