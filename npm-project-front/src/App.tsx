import { Typography } from '@mui/material'
import './App.css'
import NavBar from "./components/nav-bar/NavBar"
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
