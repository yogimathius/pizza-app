import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* 
      - Dropdown to choose from sizes
      - Radio button selectors for pizza toppings (if more than X amount, extra charge)
      - Total amount calculator (calculates size of piece + toppings) */}
      <select name="pizza-sizes" id="pizza-sizes">
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
        <option value="huge">huge</option>
      </select>
    </div>
  )
}

export default App
