import React, { useState, useRef, useEffect } from 'react';
import Todolist from './todo';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


const localStorageName = "list of todos";

export default function App() {


    const todoNameRef = useRef();
    const [todos, setTodo] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(localStorageName));
        console.log(storedTodos)
        if (storedTodos) { setTodo(storedTodos) }
    }, []);

    useEffect(() => {
        localStorage.setItem(localStorageName, JSON.stringify(todos));

    }, [todos])
    function toogletodos(id) {
        const newtodoList = [...todos];
        const specifitToDo = newtodoList.find(todo => todo.id === id);
        specifitToDo.complete = !specifitToDo.complete;
        setTodo(newtodoList);
    }
    function addTodo(e) {
        const todoItem = todoNameRef.current.value;
        if (todoItem === "") {
            return;
        } else {
            setTodo(prevTodo => {
                return [...prevTodo, { id: uuidv4(), name: todoItem, complete: false }]
            });
        }
        console.log(todoItem)
        todoNameRef.current.value = null;
    }
    function handleClear() {
        const newTodos = todos.filter(todo => !todo.complete);
        setTodo([...newTodos]);
    }

    return (
        <div className="App">
            <h3 style={{ textAlign: "center" }}>list of Todos</h3>
            <div style={{ textAlign: 'center' }}>{todos.filter(todo => !todo.complete).length}  left Todo</div>
            <button onClick={handleClear} className="buttons">clear  completed Todo</button>
            <input className="input" placeholder="Add a todo..." type="text" ref={todoNameRef} />
            <button onClick={addTodo} className="buttons">add Todo</button>

            <Todolist activities={todos} toogletodos={toogletodos} />
        </div>
    );
}
