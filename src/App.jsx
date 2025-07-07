import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>learn about redux toolkit</h1>
    <p>Redux Toolkit is a powerful tool for managing state in React applications.</p>
    <p>It provides a set of tools and best practices for efficient state management.</p>
    <p>With Redux Toolkit, you can easily create and manage slices of state, handle asynchronous actions, and more.</p>
    </>
  )
}

export default App
