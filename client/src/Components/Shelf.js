import React, { useEffect, useState } from 'react'

function Shelf() {
  const API_KEY = 'AIzaSyCstauv1GWKGRuQ5XyUWfSsy9_SUXbFy7I'
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyCstauv1GWKGRuQ5XyUWfSsy9_SUXbFy7I`
        )
        if (!response || undefined) console.log('errore no response')
        const data = await response.json()
        setBooks(data.items)
      } catch (error) {
        console.log(error)
      }
    }
    //attenzione! l'avevo messa nella parentesi del catch e non del useEffect
    fetchBooks()
  }, [])

  return (
    <div className='shelf-grid'>
      {books.map((item, index) => {
        const { authors, categories, imageLinks, publisher, title } =
          item.volumeInfo
        let authorsList
        console.log(authors)
        if (authors !== undefined) {
          authorsList = authors.join(', ')
        }
        return (
          <div className='shelf-book' key={index}>
            <img
              src={imageLinks.smallThumbnail}
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
              {title}
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
