import React, { useState } from 'react'

function AddForm({ setShowForm }) {
  const [vId, setVid] = useState('')
  const [vName, setVname] = useState('')
  const [vPrice, setVprice] = useState(0)
  const [vUnit, setVunit] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [createdBy, setCreatedBy] = useState('')

  const data = { vId, vName, vPrice, vUnit, companyName, createdBy }

  const submitToDB = async (url, data) => {
    console.log('API at BackEnd: ', url)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello from client')
    submitToDB('http://localhost:4500/vegetables/add', data)
    //loading
    setShowForm(false)
    //creation confirmation
  }
  return (
    <aside className='creation-form'>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <p className='form-header'>
          Add Product
          <button
            display='inline'
            type='button'
            className='close-btn'
            onClick={() => {
              setShowForm(false)
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
            required
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
            required
          />
        </p>
        <p>
          <label htmlFor='vprice'>Product Price </label>
          <input
            type='number'
            id='vprice'
            name='vprice'
            value={vPrice}
            onChange={(e) => {
              setVprice(e.target.value)
            }}
            required
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
            required
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
        <p>
          <label htmlFor='createdby'>User Name </label>
          <input
            type='text'
            id='createdby'
            name='createdby'
            value={createdBy}
            onChange={(e) => {
              setCreatedBy(e.target.value)
            }}
            required
          />
        </p>
        <button type='submit' style={{ display: 'block' }}>
          Submit
        </button>
      </form>
    </aside>
  )
}

export default AddForm
