import React, { useState, useEffect } from 'react'

import AddForm from '../Components/AddForm'
import SearchForm from '../Components/SearchForm'
import VeggieStand from '../Components/VeggieStand'

function Vegetables() {
  const [showForm, setShowForm] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [status, setStatus] = useState(false)
  const [stand, setStand] = useState([])
  let controller = new AbortController()
  let isMounted = true

  const getVegetables = async () => {
    try {
      const response = await fetch(
        'http://localhost:4500/vegetables/database',
        {
          signal: controller.signal,
        }
      )

      const data = await response.json()
      isMounted && setStand(data)
      //console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    isMounted = true

    getVegetables()

    // return () => {
    //   isMounted = false
    //   controller.abort()
    // }
  }, [])

  return (
    <main className='veg-page'>
      <div className='add-article'>
        <button
          onClick={() => {
            setShowForm(true)
          }}
        >
          Add Vegetables
        </button>
        <button
          onClick={() => {
            setShowSearch(true)
          }}
        >
          Search Vegetables
        </button>
        {/* <button className='sign-in'>
          <Link to='/login'>Log In</Link>
        </button> */}
        <button
          onClick={() => {
            getVegetables()
          }}
        >
          restore
        </button>
      </div>

      {showForm && (
        <AddForm
          setShowForm={setShowForm}
          setStatus={setStatus}
          status={status}
        />
      )}
      {showSearch && (
        <SearchForm setShowSearch={setShowSearch} setStand={setStand} />
      )}

      <VeggieStand stand={stand} />
    </main>
  )
}

export default Vegetables
