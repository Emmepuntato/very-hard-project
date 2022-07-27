import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContex } from '../Context'
const API_KEY = 'AIzaSyCstauv1GWKGRuQ5XyUWfSsy9_SUXbFy7I'

function SingleBook() {
  const [book, setBook] = useState()
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
  //console.log(book.saleInfo)
  //console.log(book.saleInfo.country)
  // const temp = book.saleInfo.country
  // console.log(temp)
  //----------------------------

  if (book === undefined) {
    return <div className='error'>No books found</div>
  }

  //-------debugging-----------
  // const {
  //   saleability,
  //   //retailPrice = 'no price',
  //   isEbook = 'no printtype',
  // } = book.saleInfo
  //----------------------------

  // console.log('saleability', saleability, isEbook)
  // const {
  //   title = 'no title',
  //   subtitles = 'no subtitle',
  //   authors = 'no author',
  //   categories = 'no categories',
  //   imageLinks = 'no thumnail',
  //   language = 'no lang aval.',
  //   publisher = 'no publisher',
  //   publishedDate = 'not published yet',
  //   pageCount = 'no page count',
  //   description = 'no description',
  //   averageRatings = 'no ratings',
  //   canonicalVolumeLink = ' no last',
  // } = book.volumeInfo
  return (
    <section>
      <div className='single-book'>
        SingleBook
        {/* <h1 className='title'>{title}</h1>
        <div className='single-book-img'>
          <img className='center' src={imageLinks.medium} alt='' />
        </div>
        <h3>{authors || 'undefined'}</h3>
        <h4>{publisher || 'undefined'}</h4>
        <h4>{retailPrice || 'undefined'}</h4>
        <p>{publishedDate || 'undefined'}</p>
        <p>{description || 'undefined'}</p>
        <p>{pageCount || 'undefined'}</p>
        <p>{language || 'undefined'}</p>
        <p>{averageRatings || 'undefined'}</p>
        <p>{isEbook || 'undefined'}</p> */}
      </div>
    </section>
  )
}

export default SingleBook
