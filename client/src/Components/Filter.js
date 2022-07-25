import React, { useEffect, useState, useRef } from 'react'
import { useGlobalContex } from '../Context'

function Filter() {
  //text param: full or partial research
  //filter by author, publisher, category (adv. isbn)
  //filter by language
  //filter by publish year
  const { filterBookAPI } = useGlobalContex()
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
      filterBookAPI(filters)
    }
  }
  return (
    <div className='filter-div'>
      filter
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <ul>
          <span className='null' ref={alertFilter}>
            {alert}
          </span>
          <li>
            <label htmlFor='author'>author</label>
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
            <label htmlFor='publisher'>publisher</label>
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
            <label htmlFor='category'>category</label>
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
            <label htmlFor='language'>language</label>
            <input
              type='text'
              id='language'
              name='language'
              value={lang}
              onChange={(e) => {
                setLang(e.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor='year'>year</label>
            <input
              type='number'
              id='year'
              name='year'
              value={year}
              onChange={(e) => {
                setYear(e.target.value)
              }}
            />
          </li>
        </ul>
        <button type='submit'>Filter</button>
      </form>
    </div>
  )
}

export default Filter
