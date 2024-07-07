import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { AlMedinProvider } from './context/AlMedinContext'
import RouterSelector from './routes/Router'

function App() {

  return (
    <Router>
      <AlMedinProvider>
        <RouterSelector/>
      </AlMedinProvider>
   </Router>
  )
}

export default App