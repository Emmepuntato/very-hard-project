import React, { useContext, useReducer } from 'react'
import localData from './local-data/menu'
import {reducer} from './local-data/reducer'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    data: localData,
    bookSearchInput:''
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  const searchBookAPI = (state)=>{
    dispatch({type:"SEARCH", ...state})
  }

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContex = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
