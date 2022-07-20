import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contacts from './Pages/Contacts'

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

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </Router>
  )
}

export default App
