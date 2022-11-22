import React, { useState } from 'react'

function SearchForm({ setShowSearch, setStand }) {
  const [vId, setVid] = useState('')
  const [vName, setVname] = useState('')
  const [vUnit, setVunit] = useState('')
  const [companyName, setCompanyName] = useState('')

  const data = { vId, vName, vUnit, companyName }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.lenght == 0) {
      /*error message*/
    }
    submitToDB('http://localhost:4500/vegetables/database', data)
  }

  const submitToDB = async (url, data) => {
    console.log(
      'API at BackEnd: ',
      url +
        `/search?id=${vId}&name=${vName}&unit=${vUnit}&company=${companyName}`
    )
    try {
      const response = await fetch(
        url +
          `/search?id=${vId}&name=${vName}&unit=${vUnit}&company=${companyName}`
      )
      const result = await response.json()
      console.log('fronte end got: ', result)
      setStand(result)
      setShowSearch(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <aside className='creation-form'>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <p className='form-header'>
          Search
          <button
            display='inline'
            type='button'
            className='close-btn'
            onClick={() => {
              setShowSearch(false)
            }}
          >
            X
          </button>
        </p>
        <p>
          <label htmlFor='vid'>Product ID </label>
          <input
            type='text'
            id='vid'
            name='vid'
            value={vId}
            onChange={(e) => {
              setVid(e.target.value)
            }}
          />
        </p>
        <p>
          <label htmlFor='vname'>Product Name </label>
          <input
            type='text'
            id='vname'
            name='vname'
            value={vName}
            onChange={(e) => {
              setVname(e.target.value)
            }}
          />
        </p>

        <p>
          <label htmlFor='vunit'>Price Unit </label>
          <select
            type='text'
            id='vunit'
            name='vunit'
            value={vUnit}
            onChange={(e) => {
              setVunit(e.target.value)
            }}
          >
            <option value=''>Select Unit</option>
            <option value='€/kg'>€/kg</option>
            <option value='€/hg'>€/hg</option>
            <option value='€/g'>€/g</option>
            <option value='€/pcs'>€/pcs</option>
            <option value='$/kg'>$/kg</option>
            <option value='$/hg'>$/hg</option>
            <option value='$/g'>$/g</option>
            <option value='$/pcs'>$/pcs</option>
            <option value='£/kg'>£/kg</option>
            <option value='£/hg'>£/hg</option>
            <option value='£/g'>£/g</option>
            <option value='£/pcs'>£/pcs</option>
          </select>
        </p>
        <p>
          <label htmlFor='companyname'>Company Name </label>
          <input
            type='text'
            id='companyname'
            name='companyname'
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value)
            }}
          />
        </p>
        <button type='submit' style={{ display: 'block' }}>
          Submit
        </button>
      </form>
    </aside>
  )
}

export default SearchForm
