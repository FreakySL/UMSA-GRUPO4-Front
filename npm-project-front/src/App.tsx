import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import MedicSpecialists from './pages/MedicSpecialists'
import { Suspense } from 'react'

function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/medicSpecialists" element={
          <Suspense fallback={<div>Loading...</div>}>
            <MedicSpecialists></MedicSpecialists>
          </Suspense>
        } />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
