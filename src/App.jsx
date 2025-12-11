import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/common/NavBar.jsx'
import Footer from './components/common/Footer.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Medium from './pages/Medium.jsx'
import Team from './pages/Team.jsx'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
