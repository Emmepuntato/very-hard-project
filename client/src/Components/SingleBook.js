import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContex } from '../Context'
const API_KEY = 'AIzaSyCstauv1GWKGRuQ5XyUWfSsy9_SUXbFy7I'

function SingleBook() {
  const [book, setBook] = useState({})
  const [moreDesc, setMoreDesc] = useState(false)
  const [moreCat, setMoreCat] = useState(false)
  const { id } = useParams()
  const volumeURL = `https://www.googleapis.com/books/v1/volumes/${id}?&key=${API_KEY}`

  const fetchBooks = async (url) => {
    console.log('API at: ', url)
    try {
      const response = await fetch(url)
      if (!response || undefined) console.log('errore no response')
      const data = await response.json()
      setBook(data)
      console.log('API successful')
    } catch (error) {
      console.log('\nERROR IN FETCHING DATA \n', error)
    }
  }

  useEffect(() => {
    console.log('api success')
    fetchBooks(volumeURL, setBook)
  }, [volumeURL])
  //-------debugging-----------
  console.log(volumeURL)
  console.log(book)
  // console.log(book.saleInfo)
  // console.log(book.saleInfo.country)
  // const temp = book.saleInfo.country
  // console.log(temp)
  //----------------------------

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
      categories = 'no categories',
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
  return (
    <section>
      <div className='single-book'>
        <h1 className='title'>{title}</h1>
        <h2 className={subtitles !== 'no subtitle' ? subtitles : 'null'}>
          {subtitles}
        </h2>
        <div className='single-book-img'>
          <img
            className='center'
            src={imageLinks.medium || imageLinks.thumbnail}
            alt=''
          />
        </div>
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
          <br />{' '}
          {`${retailPrice.currencyCode} ${retailPrice.amount}` ||
            saleability.replace(/_/g, ' ')}
        </h4>
        <p>
          Released:
          <br /> {publishedDate || 'not found'}
        </p>
        <p>
          Genres:
          <br />{' '}
          {(!moreCat
            ? categories.slice(0, 2).join(', ')
            : categories.join(', ')) || 'not available'}
          <button
            className='btn-show-more'
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
            className='btn-show-more'
            onClick={() => {
              setMoreDesc(!moreDesc)
            }}
          >
            {!moreDesc ? ' ... show more' : 'show less'}
          </button>
        </p>
        <p>
          Page number:
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
          E-Book availability:
          <br /> {isEbook.toString() || 'not found'}
        </p>
        <a href={canonicalVolumeLink}>
          Shop link: <br /> {canonicalVolumeLink}
        </a>
      </div>
    </section>
  )
}

export default SingleBook
