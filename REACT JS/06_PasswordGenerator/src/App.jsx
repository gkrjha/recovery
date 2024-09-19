import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setlength] = useState(6)
  const [characterAllowed,setCharacter] = useState(false);
  const [numberAllowed,setNumber] = useState(false);
  const [password,setPassword] = useState("");
  const [copybutton,setCopyButton] = useState("copy")

  // useRef Hook
  const passwordref=useRef(null)

  const passwordGenerator = useCallback(() => {
    let password="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(characterAllowed) {
      str += "@#$%^&*()_+=-{}[]|:;<>,.?/~`";
    }

    if(numberAllowed) {
      str += "1234567890";
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      password += str.charAt(char);
    }

    setPassword(password)
    
  },[length,characterAllowed,numberAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,)
    setCopyButton("copied")
    window.navigator.clipboard.writeText(password)
  },[password]) 

  useEffect(()=>{
    passwordGenerator()
  },[passwordGenerator,length,characterAllowed,numberAllowed,setPassword])

  
  return (
    <>
     

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3  py-3 my-7 text-orange-500 bg-gray-800 text-center'>
      <h1 className='text-1xl text-center text-white my-3 bg-blue-600 rounded-3xl '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-'>


          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly

          ref={passwordref}
          />


          <button className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0' 
          onClick={copyPasswordToClipboard}
          >{copybutton}</button>
        </div>
        <div className='flex text-sm gap-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={10}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            
            />
            <label htmlFor="">Length{length}</label>
          </div>
          <div className='flex items-center gap-x-1 ml-7'>
            <input type="checkbox" 
            defaultChecked={characterAllowed}
            className='cursor-pointer'
            onChange={()=>{setCharacter((prev)=>!prev)}}
            />
            <label htmlFor=""> characters</label>
          </div>
          <div className='flex items-center gap-x-1 ml-7'>
            <input type="checkbox" 
            checked={numberAllowed}
            className='cursor-pointer'
            onChange={(e)=>{setNumber((prev)=>!prev)}}
            />
            <label htmlFor=""> numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
