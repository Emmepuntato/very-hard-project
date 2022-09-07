import React, { useState } from 'react'
import { TiCloudStorage } from 'react-icons/ti'

function Vegetables() {
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
  }
  return (
    <main className='veg-page'>
      <div className='add-article'>add article</div>
      <aside className='creation-form'>
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <label htmlFor='vid'>Product ID</label>
          <input
            type='text'
            id='vid'
            name='vid'
            value={vId}
            onChange={(e) => {
              setVid(e.target.value)
            }}
          />
          <label htmlFor='vname'>Product Name</label>
          <input
            type='text'
            id='vname'
            name='vname'
            value={vName}
            onChange={(e) => {
              setVname(e.target.value)
            }}
          />
          <label htmlFor='vprice'>Product Price</label>
          <input
            type='number'
            id='vprice'
            name='vprice'
            value={vPrice}
            onChange={(e) => {
              setVprice(e.target.value)
            }}
          />
          <label htmlFor='vunit'>Price Unit</label>
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
            <option value='$/kg'>$/kg</option>
            <option value='$/hg'>$/hg</option>
            <option value='$/g'>$/g</option>
            <option value='£/kg'>£/kg</option>
            <option value='£/hg'>£/hg</option>
            <option value='£/g'>£/g</option>
          </select>
          <label htmlFor='companyname'>Company Name</label>
          <input
            type='text'
            id='companyname'
            name='companyname'
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value)
            }}
          />
          <label htmlFor='createdby'>User Name</label>
          <input
            type='text'
            id='createdby'
            name='createdby'
            value={createdBy}
            onChange={(e) => {
              setCreatedBy(e.target.value)
            }}
          />
          <button type='submit'>Submit</button>
        </form>
      </aside>
      <section className='stand'>Vegetables</section>
    </main>
  )
}

export default Vegetables
