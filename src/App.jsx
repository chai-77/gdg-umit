import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Medium from './pages/Medium.jsx'
import Team from './pages/Team.jsx'

const App = () => {
  return (
  <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      
    </>
  )
}

export default App
