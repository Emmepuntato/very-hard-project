import React, { useContext, useReducer } from 'react'
import localData from './local-data/menu'
import { reducer } from './local-data/reducer'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    data: localData,
    // isLoading: false,
    bookSearchInput: 'welcome',
    bookSearchFilter: {
      author: '',
      publisher: '',
      genre: '',
      language: 'en',
      year: '',
    },
    searchURL: 'https://www.googleapis.com/books/v1/volumes?q=welcome',
    filteredURL: 'https://www.googleapis.com/books/v1/volumes?q=welcome',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const searchBookAPI = (term) => {
    dispatch({ type: 'SEARCH', payload: { term } })
  }

  const filterBookAPI = (title, filterList) => {
    dispatch({ type: 'FILTER', payload: { title, filterList } })
  }

  // const loader = (condition) => {
  //   dispatch({ type: 'LOADING', payload: { condition } })
  // }

  return (
    <AppContext.Provider value={{ ...state, searchBookAPI, filterBookAPI }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContex = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
