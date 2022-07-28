import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContex } from '../Context'
const API_KEY = 'AIzaSyCstauv1GWKGRuQ5XyUWfSsy9_SUXbFy7I'

function SingleBook() {
  const [book, setBook] = useState({})
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
      saleability: saleability = 'no sales',
      retailPrice: retailPrice = 'no price',
      isEbook: isEbook = 'no printtype',
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
      description = 'no description',
      averageRatings = 'no ratings',
      canonicalVolumeLink = ' no last',
    } = {},
  } = book
  return (
    <section>
      <div className='single-book'>
        SingleBook
        <h1 className='title'>{title}</h1>
        <h2 className='subtitle'>{subtitles}</h2>
        <div className='single-book-img'>
          <img className='center' src={imageLinks.medium} alt='' />
        </div>
        <h3>Author: {authors || 'not found'}</h3>
        <h4>Publisher: {publisher || 'not found'}</h4>
        <h4>Price: {retailPrice.amount || 'not found'}</h4>
        <p>Released: {publishedDate || 'not found'}</p>
        <p>Genres: {categories || 'not found'}</p>
        <p>
          {' '}
          Description:
          {description.replace('<p>', '').replace('</p>', '') || 'not found'}
        </p>
        <p>Page number: {pageCount || 'not found'}</p>
        <p>Langueage: {language || 'not found'}</p>
        <p>Ratings: {averageRatings || 'not found'}</p>
        <p>E-Book availability: {isEbook.toString() || 'not found'}</p>
        <p>Shop link: {canonicalVolumeLink}</p>
      </div>
    </section>
  )
}

export default SingleBook
