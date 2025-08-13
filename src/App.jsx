import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'
function App() {
  

  return (
    <div className="outer-pokedex">
     <Link to="/"><h1 id="pokedex-heading">Pokedex</h1></Link>
      <CustomRoutes/>
    </div>
  )
}

export default App
