import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Privacy from './Pages/Privacy'
import BookPage from './Pages/Books'
import SingleBook from './Components/SingleBook'
import Vegetables from './Pages/Vegetables'
import Signin from './Pages/Signin'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/books' element={<BookPage />} />
        <Route path='/books/:id' element={<SingleBook />} />
        <Route path='vegetables' element={<Vegetables />} />
        {/* <Route path='login' element={<Login />} /> */}
        <Route path='signin' element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default App
