import React from 'react'

const fetchData = async () => {
  try {
    const response = await fetch('../../public/local-data/menu.json')
    const data = await response.json()
    console.log(data)
    console.log('menu')
  } catch (err) {
    console.log(err)
  }
}

export default function Menu() {
  return (
    <div
      className='nav-menu'
      onClick={() => {
        fetchData()
      }}
    >
      menu
    </div>
  )
}
