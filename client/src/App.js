import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {
  const [data, setData] = useState()

  const fetchData = async () => {
    const response = await fetch('/api')
    const info = await response.json()
    setData(info)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  return (
    <div className='App'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
