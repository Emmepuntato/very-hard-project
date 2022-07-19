import React, { useContext, useState, useEffect, useReducer } from 'react'
import localData from './local-data/menu'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    data: localData,
  }
  const reducer = {}

  const [state, action] = useReducer(reducer, initialState)

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

export const useGlobalContex = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
