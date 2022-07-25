import React, { useEffect, useState } from 'react'
import { useGlobalContex } from '../Context'

function Shelf() {
  const { bookSearchInput, bookSearchFilter } = useGlobalContex()
  const API_KEY = 'AIzaSyCstauv1GWKGRuQ5XyUWfSsy9_SUXbFy7I'
  const [books, setBooks] = useState([])

  const customURL = `https://www.googleapis.com/books/v1/volumes?q=${
    bookSearchInput.term || 'welcome'
  }&key=${API_KEY}`
  console.log('API at: ', customURL)
  const altThumbnail =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'

  useEffect(() => {
    console.log('input', bookSearchInput)

    const fetchBooks = async () => {
      try {
        const response = await fetch(customURL)
        if (!response || undefined) console.log('errore no response')
        const data = await response.json()
        setBooks(data.items)
        // console.log('API at: ', customURL)
        // console.log('fetched items:', data.totalItems)
      } catch (error) {
        console.log(error)
      }
    }
    //attenzione! l'avevo messa nella parentesi del catch e non del useEffect
    fetchBooks()
  }, [customURL])

  // useEffect(() => {
  //   const { author, publisher, genre, lang, year } = bookSearchFilter
  //   console.log('input term', bookSearchInput.term)
  //   const filteredURL = `https://www.googleapis.com/books/v1/volumes?q=${bookSearchInput.term}+inauthor:${author}+inpublisher:${publisher}+subject:${genre}&key=${API_KEY}`
  //   console.log('bookSearchFilter', bookSearchFilter)
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await fetch(filteredURL)
  //       if (!response || undefined) console.log('errore no response')
  //       const data = await response.json()
  //       setBooks(data.items)
  //       console.log('API at: ', filteredURL)
  //       console.log('fetched items:', data.totalItems)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   //attenzione! l'avevo messa nella parentesi del catch e non del useEffect
  //   fetchBooks()
  // }, [bookSearchFilter])

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
              src={imageLinks.smallThumbnail || ''}
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
