import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className='homepage'>
        <div className='books'>
          <Link to='/books'>books</Link>
        </div>
        <div className='vegetables'>vegetables</div>
      </section>
    </>
  )
}

export default Home
