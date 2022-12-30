import React, { useEffect, useState } from 'react'
import { useGlobalContex } from '../Context'
import { Link } from 'react-router-dom'
import Loading from './Loading'

function Shelf() {
  const [isLoading, setIsLoading] = useState(false)
  const { searchURL, filteredURL } = useGlobalContex()
  const [books, setBooks] = useState([])
  const [itemCount, setItemCount] = useState([])
  const [pageNum, setPageNum] = useState(0)
  const itemDisplayed = 18
  const [starting, setStarting] = useState(0)

  const altThumbnail =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'

  const fetchBooks = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      if (!response || undefined) console.log('error w/ fetchBooks')
      const data = await response.json()
      setBooks(data.items || [])
      setItemCount(data.totalItems)
      setIsLoading(false)
    } catch (error) {
      console.log('error -> ', error)
    }
  }

  useEffect(() => {
    fetchBooks(searchURL.concat(`&startIndex=${starting}`))
    window.scrollTo(0, 0)
  }, [searchURL, starting])

  useEffect(() => {
    fetchBooks(filteredURL.concat(`&startIndex=${starting}`))
    window.scrollTo(0, 0)
  }, [filteredURL, starting])

  const pageCounter = (operator) => {
    switch (operator) {
      case '-':
        pageNum >= 1 && setPageNum(pageNum - 1)
        setStarting(starting - itemDisplayed)
        break
      case '+':
        if (starting > itemCount) break
        setStarting(starting + itemDisplayed)
        setPageNum(pageNum + 1)
        break
      default:
        break
    }
  }

  if (isLoading) {
    return <Loading />
  }

  if (itemCount < 1 || itemCount === undefined) {
    return <div>'no results :('</div>
  }
  return (
    <>
      <div className='shelf-grid'>
        {books.map((item, index) => {
          const {
            authors,
            categories = '---//---',
            imageLinks = altThumbnail,
            title = '---//---',
          } = item.volumeInfo
          const id = item.id
          let authorsList

          if (authors !== undefined) {
            authorsList = authors.join(', ')
          }
          return (
            <article className='shelf-book' key={index}>
              <Link to={`/books/${id}`}>
                <img
                  src={imageLinks.thumbnail || ''}
                  alt='thumbnail'
                  style={{ width: '12rem', height: '16rem' }}
                />
              </Link>
              <p
                style={{
                  fontSize: '1.5rem',
                  maxHeight: '4rem',
                  textAlign: 'center',
                  overflow: 'hidden',
                  fontWeight: '500',
                }}
              >
                {title.substring(0, 35)}
              </p>
              <p
                style={{
                  fontStyle: 'italic',
                  margin: '0.2rem',
                  fontSize: '1.1rem',
                }}
              >
                {authorsList || authors}
              </p>
              <p style={{ fontSize: '0.9rem', margin: '0' }}>
                - {categories} -
              </p>
            </article>
          )
        })}
      </div>
      <footer className='shelf-footer'>
        <div>
          <button
            onClick={() => {
              pageCounter('-')
            }}
          >
            previous page
          </button>
          {pageNum + 1}
          <button
            onClick={() => {
              pageCounter('+')
            }}
          >
            next page
          </button>
        </div>
      </footer>
    </>
  )
}

export default Shelf
