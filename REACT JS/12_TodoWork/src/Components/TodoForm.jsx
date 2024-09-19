import React, { useState } from "react";
import { userTodo } from "../Context/TodoContext";

function TodoForm() {
    const [todo , setTodo] =useState("")
    const { addTodo} =userTodo()

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({ todo, completed:false})
        setTodo("")
    }

  return (
      <form onSubmit={handleSubmit} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              onChange={(e)=>setTodo(e.target.value)}
              value={todo}
          />
          <button type="submit" 
          onClick={handleSubmit}
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;

