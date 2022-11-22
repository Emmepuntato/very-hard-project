import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AddForm from '../Components/AddForm'
import SearchForm from '../Components/SearchForm'
import VeggieStand from '../Components/VeggieStand'

function Vegetables() {
  const [showForm, setShowForm] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [stand, setStand] = useState([])

  const getVegetables = async () => {
    try {
      const response = await fetch('http://localhost:4500/vegetables/database')
      const data = await response.json()
      setStand(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getVegetables()
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
        <button className='sign-in'>
          <Link to='/signin'>Sign-In</Link>
        </button>
      </div>

      {showForm && <AddForm setShowForm={setShowForm} />}
      {showSearch && (
        <SearchForm setShowSearch={setShowSearch} setStand={setStand} />
      )}

      <VeggieStand stand={stand} />
    </main>
  )
}

export default Vegetables
