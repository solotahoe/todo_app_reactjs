import React from 'react';

function Todocompo({todoItem, toggletodo }) {
  const checkComplete=()=>{
   toggletodo(todoItem.id);
   
 }

  const putLineThrough = () => {
    return { textDecoration: todoItem.completed ? "Line-Through" : "" }
  }

  // const putLineThrough={
  //   textDecoration:"Line-Through"
  // }
    return (
      <div className="eachTodo" style={putLineThrough()}>
        <label>
          <input type="checkbox" checked={todoItem.completed} onChange={checkComplete}/> {''}
         {todoItem.name}
        </label>
      </div>
    )
}
export default Todocompo;