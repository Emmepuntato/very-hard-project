import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value=''>{children}</AppContext.Provider>
}

export const useGlobalContex = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
