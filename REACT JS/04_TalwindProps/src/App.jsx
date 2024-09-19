import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
      Telwindcss test
    </h1>
    <Cards Channel="Chai or code" btnTxt="click me"/>
    <Cards Channel="Chai with react" btnTxt="visit me"/>
    <Cards Channel="Hitesh chy" btnTxt="contact me"/>

    </>
  )
}

export default App
