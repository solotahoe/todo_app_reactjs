import React from 'react';
 import Todocompo from './To';


function Todolist({ todos, toggletodo}) {
   console.log(todos);
  
    return (
       <div className="todoItemm"  >
         {todos.map(todo =>
            <Todocompo todoItem={todo} key={todo.id} toggletodo={toggletodo}/>
         )}
       </div>
      
   
  
    )
}
export default Todolist;