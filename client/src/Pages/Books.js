import React from 'react'
import Search from '../Components/Search'
import Filter from '../Components/Filter'
import Shelf from '../Components/Shelf'

function BookPage() {
  return (
    <section className='bookpage'>
      <div className='search'>
        <div className='center'>
          <Search />
        </div>
      </div>
      <div className='filter'>
        <div className='center'>
          <Filter />
        </div>
      </div>
      <div className='shelf'>
        <Shelf />
      </div>
    </section>
  )
}

export default BookPage
