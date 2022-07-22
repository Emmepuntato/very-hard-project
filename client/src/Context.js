import React, { useContext, useReducer } from 'react'
import localData from './local-data/menu'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    data: localData,
  }
  const reducer = {}
  const [state, action] = useReducer(reducer, initialState)

  function stringCutter(array, maxLength, separator) {
    return array.splice(0, maxLength).join(separator)
  }

  return (
    <AppContext.Provider value={{ ...state, stringCutter }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContex = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
