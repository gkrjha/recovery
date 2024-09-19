import { useState } from 'react'

import './App.css'
import ContextProvider from './Context/ContextProvider'
import Login from './UserInfo/Login'
import Profile from './UserInfo/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
    <Login />
    <Profile />
    </ContextProvider>
  )
}

export default App
