import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Header from './components/Header'
import RouterSelector from './routes/Router'
import Login from './pages/Login'
import Register from './pages/Register'
import { AlMedinProvider } from './context/AlMedinContext'

function App() {

  return (

    <Router>
      <AlMedinProvider>
        <Header />
        <RouterSelector/>
        <Footer />
      </AlMedinProvider>
   </Router>
  )
}

export default App
