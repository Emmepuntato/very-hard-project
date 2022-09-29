import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className='homepage'>
        <div className='books'>
          <Link to='/books'>
            <p>Books</p>
          </Link>
        </div>
        <div className='vegetables'>
          <Link to='/vegetables'>
            <p>Vegetables</p>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
