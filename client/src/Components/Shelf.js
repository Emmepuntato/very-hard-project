import React, { useEffect, useState } from 'react'
import { useGlobalContex } from '../Context'

function Shelf() {
  const { bookSearchInput, searchURL, filteredURL } = useGlobalContex()
  const API_KEY = 'AIzaSyCstauv1GWKGRuQ5XyUWfSsy9_SUXbFy7I'
  const [books, setBooks] = useState([])

  // const customURL = `https://www.googleapis.com/books/v1/volumes?q=${
  //   bookSearchInput.term || 'welcome'
  // }&key=${API_KEY}`
  const altThumbnail =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'

  const fetchBooks = async (url) => {
    console.log('API at: ', url)
    try {
      const response = await fetch(url)
      if (!response || undefined) console.log('errore no response')
      const data = await response.json()
      setBooks(data.items)
      console.log('API successful')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    console.log('searcURL re-rendered')
    fetchBooks(searchURL)
  }, [searchURL])

  useEffect(() => {
    console.log('filteredURL re-rendered')
    fetchBooks(filteredURL)
  }, [filteredURL])
  if (books.length < 1) {
    return <div>'no results :('</div>
  }
  return (
    <div className='shelf-grid'>
      {books.map((item, index) => {
        const {
          authors,
          categories = '---//---',
          imageLinks = altThumbnail,
          publisher = '---//---',
          title = '---//---',
        } = item.volumeInfo
        let authorsList

        if (authors !== undefined) {
          authorsList = authors.join(', ')
        }
        return (
          <div className='shelf-book' key={index}>
            <img
              src={imageLinks.thumbnail || ''}
              alt='thumbnail'
              style={{ width: '12rem', height: '16rem' }}
            />
            <p
              style={{
                fontSize: '1.5rem',
                maxHeight: '4rem',
                textAlign: 'center',
                overflow: 'hidden',
              }}
            >
              {title.substring(0, 35)}
            </p>
            <p style={{ fontStyle: 'italic', margin: '0.2rem' }}>
              {authorsList || authors}
            </p>
            <p style={{ fontSize: '0.7rem', margin: '0' }}>{categories}</p>
            <p style={{ fontSize: '0.5rem', margin: '0' }}>{publisher}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Shelf
