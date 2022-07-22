import React, { useEffect, useState } from 'react'

function Search() {
  const [inputText, setInputText] = useState('')
  const [searchParam, setSearchParam] = useState('')

  const handleChange = (e) => {
    setInputText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchParam(inputText)
  }
  return (
    <section className='form'>
      <p>Book Search Engine</p>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label htmlFor='search'></label>
        <input
          type='text'
          id='search'
          name='search'
          value={inputText}
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <button type='submit'>Search</button>
      </form>
    </section>
  )
}

export default Search
