import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import First from './componets/first/first.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <First />
    </div>
    
      
    </>
  )
}

export default App