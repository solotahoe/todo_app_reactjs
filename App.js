import React, {useState, useRef,useEffect} from 'react';
import Todolist from './todo';
import {v4 as uuidv4} from 'uuid';
import './App.css';





export default function App() {
  const [todos, setTodo]=useState([]);
  // const[innerWidth,setInnerWidht]=useState(window.innerWidth);
  const todoReference = useRef();
  const localStorageName = "list of todos";
   useEffect(()=>{
  const storedTodos = JSON.parse(localStorage.getItem(localStorageName));
  if(storedTodos){
    setTodo(storedTodos)
  }
},[])




  const addTodoItem = () => {

    const newTodoItem=todoReference.current.value;
    if(newTodoItem===""){
      return;
    }else{
    setTodo((prevTodo)=>{
      return [...todos, { id: uuidv4(), name: newTodoItem, completed:false }]
    })
    }
    todoReference.current.value=null;
  }

  useEffect(() => {
    console.log("TODOS HAVE CHANGED");
    localStorage.setItem(localStorageName, JSON.stringify(todos));
  }, [todos]);
 
  const toggletodo=(id)=>{
    const newTodo=[...todos]
    const specificId=newTodo.find(todo=> todo.id===id);
    console.log(specificId);
    specificId.completed=!specificId.completed;
    setTodo(newTodo);
  }
  const clearCompleted=(id)=>{
    const clearCompletedTodo=[...todos];
    const filtered=clearCompletedTodo.filter(todo=>{
      return todo.completed === false;
    
    });
    setTodo(filtered)
    console.log(filtered)
   


  }
  const clearAll=()=>{
   
    setTodo([]);
  }
  return (
          <div className="App">
      <h3 style={{ lineHeight: "30px", fontSize: "30px" }}>list of Todos</h3>
            <h3 style={{lineHeight:"50px",fontSize:"30px"}}>YOU HAVE {todos.length} TODOS IN TOTAL</h3>
      <div style={{ lineHeight: "40px", fontSize: "30px" }}>{todos.filter(todo=> todo.completed === false).length} left Todo</div>
             <button className="buttons" onClick={clearCompleted}>clear  completed Todo</button>
            <button className="buttons" onClick={clearAll}>Clear all</button>
            <input className="input" placeholder="Add a todo..." type="text" ref={todoReference}/>
            <button className="buttons" onClick={addTodoItem}>add Todo</button>
          
      <Todolist todos={todos} toggletodo={toggletodo}/>
      {/* <h1>{innerWidth}</h1> */}
          </div>
  );
}
