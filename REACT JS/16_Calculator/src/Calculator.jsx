import React, { useState } from 'react'
import './App.css'
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input,setInput]=useState('') ;

  const clearAll = () => {
    setInput(''); 
  };

  const handleInput=(value)=>{
    setInput((prev)=>prev+value)
  }

  const Calculate=()=>{
    setInput(evaluate(input).toString());
  }
  return (
    <div className='conatiner'>
      <div className="input">
        <input type='text' value={input} readOnly/>
      </div>
      <div className="row-1">
        <button onClick={clearAll}>AC</button>
        <button onClick={()=>handleInput('%')}>%</button>
        <button onClick={()=>handleInput('^')}>^</button>
        <button onClick={() => setInput(input.slice(0, -1))}>C</button>
      </div>
      <div className="row-1">
        <button onClick={()=>handleInput('9')}>9</button>
        <button onClick={()=>handleInput('8')}>8</button>
        <button onClick={()=>handleInput('7')}>7</button>
        <button onClick={()=>handleInput('/')}>/</button>
      </div>
      <div className="row-2">
        <button onClick={()=>handleInput('6')}>6</button>
        <button onClick={()=>handleInput('5')}>5</button>
        <button onClick={()=>handleInput('4')}>4</button>
        <button onClick={()=>handleInput('*')}>*</button>
      </div>
      <div className="row-3">
        <button onClick={()=>handleInput('1')}>1</button>
        <button onClick={()=>handleInput('2')}>2</button>
        <button onClick={()=>handleInput('3')}>3</button>
        <button onClick={()=>handleInput('-')}>-</button>
      </div>
      <div className="row-4">
        <button onClick={()=>handleInput('0')}>0</button>
        <button onClick={()=>handleInput('.')}>.</button>
        <button onClick={Calculate}>=</button>
        <button onClick={()=>handleInput('+')}>+</button>
      </div>

    </div>
  )
}

export default Calculator
