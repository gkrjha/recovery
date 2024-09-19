import React,{useContext,createContext} from 'react';

export const TodoContext=createContext({
  todos:[],
  setTodo:()=>{},
  addTodo:(todo)=>{},
  deleteTodo:(id)=>{},
  editTodo:(id,todo)=>{},
  toggleComplete: (id) =>{}

})

export const userTodo=()=>{
  return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider 