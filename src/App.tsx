import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.sass'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
    </div>
  )
}

export default App
