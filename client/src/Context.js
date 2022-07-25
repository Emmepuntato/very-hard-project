import React, { useContext, useReducer } from 'react'
import localData from './local-data/menu'
import { reducer } from './local-data/reducer'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    data: localData,
    bookSearchInput: '',
    bookSearchFilter: {
      author: '',
      publisher: '',
      genre: '',
      language: '',
      year: new Date().getFullYear(),
    },
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const searchBookAPI = (term) => {
    dispatch({ type: 'SEARCH', payload: { term } })
  }

  const filterBookAPI = (filterList) => {
    dispatch({ type: 'FILTER', payload: { filterList } })
  }

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
