export const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      console.log('called reducer, type: SEARCH, payload ', action.payload)
      return { ...state, bookSearchInput: action.payload }
    case 'FILTER':
      // url base for API: https://www.googleapis.com/books/v1/volumes?q=
      const { author, publ, cat, lang, year } = action.payload.filterList
      console.log('called reducer, type: FILTER, payload ', action.payload)
      return {
        ...state,
        bookSearchFilter: {
          author: author,
          publisher: publ,
          genre: cat,
          language: lang,
          year: year,
        },
      }
    default:
      throw new Error('No Dispatch Found')
  }
}
