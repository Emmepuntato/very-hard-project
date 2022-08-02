import React, { useState, useRef } from 'react'
import { useGlobalContex } from '../Context'

function Filter() {
  //text param: full or partial research
  //filter by author, publisher, category (adv. isbn)
  //filter by language
  //filter by publish year
  const { filterBookAPI, bookSearchInput } = useGlobalContex()
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [category, setCategory] = useState('')
  const [lang, setLang] = useState('')
  const [year, setYear] = useState('')
  const alertFilter = useRef()
  const [alert, setAlert] = useState('')

  const filters = {
    author,
    publ: publisher,
    cat: category,
    lang,
    year,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      author === '' &&
      publisher === '' &&
      category === '' &&
      lang === '' &&
      year === ''
    ) {
      alertFilter.current.className = 'alert-filter'
      setAlert('insert at least 1 param')
    } else if (
      year !== '' &&
      (year < 1000 || year > new Date().getFullYear())
    ) {
      alertFilter.current.className = 'alert-filter'
      setAlert('year not in the plausible range')
    } else {
      console.log('submitted')
      console.log('filters ', filters)
      filterBookAPI(bookSearchInput, filters)
    }
  }
  return (
    <div className='filter-div'>
      <form
        className='filter'
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <ul className='filter-list'>
          <p>FILTER</p>
          <span className='null' ref={alertFilter}>
            {alert}
          </span>
          <li>
            <label htmlFor='author'>author </label>
            <input
              type='text'
              id='author'
              name='author'
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor='publisher'>publisher </label>
            <input
              type='text'
              id='publisher'
              name='publisher'
              value={publisher}
              onChange={(e) => {
                setPublisher(e.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor='category'>category </label>
            <input
              type='text'
              id='category'
              name='category'
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor='language'>language </label>
            <select
              id='language'
              name='language'
              onChange={(e) => {
                setLang(e.target.value)
              }}
            >
              <option value=''>select language</option>
              <option value='it'>italian</option>
              <option value='en'>english</option>
              <option value='fr'>franch</option>
              <option value='es'>spanish</option>
            </select>
          </li>
          {/* <li>
            <label htmlFor='year'>year  </label>
            <input
              type='number'
              id='year'
              name='year'
              value={year}
              onChange={(e) => {
                setYear(e.target.value)
              }}
            />
          </li> */}
        </ul>
        <button
          type='submit'
          className='btn-submit'
          style={{ margin: '0 9rem' }}
        >
          Filter
        </button>
      </form>
    </div>
  )
}

export default Filter
