import { useState } from 'react'
import './App.sass'
import Header from './components/Header/Header'
import Drops from './pages/Drops/Drops'
import Shoping from './pages/OnlineShoping/Shoping'

function App() {
  return (
    <div className="App">
      <Header/>
      <Shoping/>
      <Drops/>
    </div>
  )
}

export default App
