import React, { useState } from 'react'
import Search from '../Components/Search'
import Filter from '../Components/Filter'
import Shelf from '../Components/Shelf'
import Loading from '../Components/Loading'
import { useGlobalContex } from '../Context'

function BookPage() {
  //const { isLoading } = useGlobalContex()
  const [isLoading, setIsLoading] = useState(false)
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
        {isLoading ? <Loading /> : <Shelf setIsLoading={setIsLoading} />}
      </div>
    </section>
  )
}

export default BookPage
