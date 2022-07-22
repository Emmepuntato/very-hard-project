import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import BookPage from './Pages/Books'

function App() {
  const [data, setData] = useState()

  const fetchData = async () => {
    try {
      const response = await fetch('/api')
      const info = await response.json()
      setData(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
    console.log(data)
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/books' element={<BookPage />} />
      </Routes>
    </Router>
  )
}

export default App
