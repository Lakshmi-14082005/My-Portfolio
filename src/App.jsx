import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
   <HashRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/Skills' element={<Skills />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
</HashRouter>

    </Router>
  )
}

export default App
