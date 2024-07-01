import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Header from './components/Header'
import RouterSelector from './routes/Router'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (

    <Router>
     <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
     </Routes>
     <Footer />
   </Router>
  )
}

export default App
