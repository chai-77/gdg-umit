import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import Team from './pages/Team'
import Medium from './pages/Medium.jsx'

const App = () => {
  return (
    <div className='bg-gdg-black-extra-dark'>
      <Navbar />

      <div className='bg-gdg-black-extra-dark'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>

      <Footer />
    </div>

  )
}

export default App
