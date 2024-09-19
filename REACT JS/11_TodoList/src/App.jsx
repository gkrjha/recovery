import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState()
  const [date ,setdate] = useState()
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if(todo && date){
      setTodos([...todos, { id: Date.now(), todo: todo, date: date }])
      setTodo('')
      setdate('')
    }
  }
  return (
    <div >
     <h1 className='bg-green-500 text-center p-4 m-4 font-bold text-3xl'>To-Do List</h1>
     <div className="bg-slate-800 p-3 ml-[200px] rounded-lg shadow-lg flex flex-row gap-4 w-[70%]">
      <input type="text"  
      placeholder='Todo-work'
      value={todo}  
      className="text-center border-y-2 w-96"
      onChange={(e)=>setTodo(e.target.value)}
      />
      {" "}
      <input type="date"  
      placeholder='Todo-work' 
      value={date}
      className='text-center ml-[30px] border-y-2 w-80'
      onChange={(e)=>setdate(e.target.value)}
      />
      <button 
      className="bg-blue-500 text-white py-2 px-9 w-36 rounded-md ml-[30px]"
      onClick={addTodo}
      >Add</button>
      </div>

      <div className="mt-8 w-full max-w-lg">
        <ul className="list-disc pl-5">
          {
           todos.map((item,index)=>(
            <li key={index} className='list-none bg-slate-400 rounded ml-[180px] p-2'>
              <div>
                {item.todo}
             
                {item.date}

                <button 
                className="bg-red-500 text-white py-2 px-4 ml-2 rounded-md"
                onClick={()=>setTodos(todos.filter(t=>t.id!==item.id))}
                >Delete</button>
              </div>
              
 
            </li> 
           ))
          }
        </ul>
      </div>
    </div>

  )
}

export default App
