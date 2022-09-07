import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className='homepage'>
        <div className='books'>
          <Link to='/books'>books</Link>
        </div>
        <div className='vegetables'>
          <Link to='/vegetables'>vegetables</Link>
        </div>
      </section>
    </>
  )
}

export default Home
