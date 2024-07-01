import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Header from './components/Header'
import RouterSelector from './routes/Router'

function App() {

  return (
    <Router>
      <Header />
      <RouterSelector/>


      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Footer />
    </Router>
  )
}

export default App