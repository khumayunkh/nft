import { useState } from 'react'
import './App.sass'
import Header from './components/Header/Header'
import Shoping from './pages/OnlineShoping/Shoping'

function App() {
  return (
    <div className="App">
      <Header/>
      <Shoping/>
    </div>
  )
}

export default App
