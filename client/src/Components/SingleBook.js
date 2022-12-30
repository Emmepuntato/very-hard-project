import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const API_KEY = 'AIzaSyCstauv1GWKGRuQ5XyUWfSsy9_SUXbFy7I'

function SingleBook() {
  const [book, setBook] = useState({})
  const [moreDesc, setMoreDesc] = useState(false)
  const [moreCat, setMoreCat] = useState(false)
  const { id } = useParams()
  const volumeURL = `https://www.googleapis.com/books/v1/volumes/${id}?&key=${API_KEY}`

  const fetchBooks = async (url) => {
    try {
      const response = await fetch(url)
      if (!response || undefined) console.log('errore no response')
      const data = await response.json()
      setBook(data)
    } catch (error) {
      console.log('\nERROR IN FETCHING DATA\n', error)
    }
  }

  useEffect(() => {
    fetchBooks(volumeURL, setBook)
  }, [volumeURL])

  if (book === undefined) {
    return <div className='error'>No books found</div>
  }

  const {
    saleInfo: {
      saleability = 'no sales',
      retailPrice = 'no price',
      isEbook = 'no printtype',
    } = {},
  } = book

  const {
    volumeInfo: {
      title = 'no title',
      subtitles = 'no subtitle',
      authors = 'no author',
      categories = [],
      imageLinks = 'no thumnail',
      language = 'no lang aval.',
      publisher = 'no publisher',
      publishedDate = 'not published yet',
      pageCount = 'no page count',
      averageRatings = 'no ratings',
      canonicalVolumeLink = ' no last',
    } = {},
  } = book
  let { volumeInfo: { description = '' } = {} } = book
  description = description
    .replace(/<\/?p>/gi, '')
    .replace(/<\/?i>/gi, '')
    .replace(/<\/?b>/gi, '')
    .replace(/<\/?br>/gi, '')
  // let authorsList = authors
  // if (authors.length > 1 && authors !== undefined)
  //   authorsList = authors.join(', ')
  return (
    <section>
      <button className='goback-btn'>
        <Link to='/books'>go back</Link>
      </button>
      <div className='single-book'>
        <h1 className='title'>{title}</h1>
        <h2 className={subtitles !== 'no subtitle' ? subtitles : 'null'}>
          {subtitles}
        </h2>
        <div className='single-book-img'>
          <img
            className='center'
            src={imageLinks.smallThumbnail}
            style={{ width: '32rem', margin: '5rem' }}
            alt=''
          />
        </div>
        <div className='book-info'>
          <h3>
            Author:
            <br />
            {authors || 'not found'}
          </h3>
          <h4>
            Publisher:
            <br />
            {publisher || 'not found'}
          </h4>
          <h4>
            Price:
            <br />
            {retailPrice.amount
              ? `${retailPrice.currencyCode} ${retailPrice.amount}`
              : saleability.replace(/_/g, ' ')}
          </h4>
          <p>
            Released:
            <br /> {publishedDate || 'not found'}
          </p>
          <p>
            Genres:
            <br />
            {categories.length > 2
              ? !moreCat
                ? categories.slice(0, 2).join(', ')
                : categories.join(', ')
              : categories.join(', ') || 'not available'}
            <button
              className={categories.length > 2 ? 'btn-show-more' : 'null'}
              onClick={() => {
                setMoreCat(!moreCat)
              }}
            >
              {!moreCat ? ' ... show more' : 'show less'}
            </button>
          </p>
          <p>
            Description:
            <br />
            {(!moreDesc ? description.substring(0, 250) : description) ||
              'not available'}
            <button
              className={description.length > 2 ? 'btn-show-more' : 'null'}
              onClick={() => {
                setMoreDesc(!moreDesc)
              }}
            >
              {!moreDesc ? ' ... show more' : 'show less'}
            </button>
          </p>
          <p>
            Page count:
            <br /> {pageCount || 'not available'}
          </p>
          <p>
            Language:
            <br /> {language || 'not available'}
          </p>
          <p>
            Ratings:
            <br /> {averageRatings || 'not available'}
          </p>
          <p>
            E-Book:
            <br /> {isEbook ? 'Available' : 'Not Available'}
          </p>
          <a
            href={canonicalVolumeLink}
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'underline', textAlign: 'center' }}
          >
            Shop link: <br /> {canonicalVolumeLink}
          </a>
        </div>
      </div>
      <button
        className='goback-btn'
        style={{
          position: 'unset',
          margin: '0px 42vw',
          marginBottom: '5rem',
          padding: '0.5rem 6rem',
        }}
      >
        <Link to='/books'>go back</Link>
      </button>
    </section>
  )
}

export default SingleBook
