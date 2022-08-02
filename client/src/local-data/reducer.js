export const reducer = (state, action) => {
  const API_KEY = 'AIzaSyCstauv1GWKGRuQ5XyUWfSsy9_SUXbFy7I'
  switch (action.type) {
    case 'SEARCH':
      console.log('called reducer, type: SEARCH, payload ', action.payload)
      const adjStr = action.payload.term.replace(' ', '%20').toLowerCase()
      return {
        ...state,
        bookSearchInput: action.payload,
        bookSearchFilter: {
          author: '',
          publisher: '',
          genre: '',
          language: '',
          year: '',
        },
        searchURL: `https://www.googleapis.com/books/v1/volumes?q="${adjStr}"&printType=books&langRestrict=en&orderBy=newest&key=${API_KEY}`,
      }
    case 'FILTER':
      console.log('called reducer, type: FILTER, payload ', action.payload)
      const {
        author = '',
        publ = '',
        cat = '',
        lang = 'en',
        year = '',
      } = action.payload.filterList
      const { title } = action.payload
      let array = [
        `https://www.googleapis.com/books/v1/volumes?q="${title.term}"`,
      ]
      // use double quote for exact match
      if (author) array.push(`+inauthor:"${author}"`)
      if (publ) array.push(`+inpublisher:"${publ}"`)
      if (cat) array.push(`+subject:${cat}`)
      let newArray = array
        .toString()
        .toLowerCase()
        .replaceAll(',', '')
        .replaceAll(' ', '%20')
      const filterArray = newArray.concat(
        `&langRestrict=${lang}&printType=books&orderBy=newest&key=${API_KEY}`
      )
      console.log('newArray = ', filterArray)
      // const filteredURL = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}+inpublisher:${publ}+subject:${cat}&key=${API_KEY}`

      return {
        ...state,
        bookSearchFilter: {
          author: author,
          publisher: publ,
          genre: cat,
          language: lang,
          year: year,
        },
        filteredURL: filterArray,
      }
    case 'LOADING':
      console.log('called reducer, type: LOADING, payload ', action.payload)
      const { condition } = action.payload
      return {
        ...state,
        isLoading: condition,
      }
    default:
      throw new Error('No Dispatch Found')
  }
}
