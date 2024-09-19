import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(1);

  return (
    <>
      <h1>Learning React Js </h1>
      <h2>Counter value :{counter}</h2>

      <button onClick={()=>{setCounter(counter+1)}}>Add vlue</button>

      <br/>

      <button onClick={()=>{setCounter(counter-1)}}>Remove value</button>

    </>
  )
}

export default App
