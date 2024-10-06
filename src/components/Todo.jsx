import React from 'react';

const Todo = ({ todo , removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration:todo.isCompleted? "line-through":""}} key={todo.id}>
      <div className="content">
        <p>{todo.text}</p>
        <div className="category">({todo.category})</div>
      </div>
      <div>
        <button className='complete'onClick={()=>completeTodo(todo.id)} ></button>
        <button className='remove'onClick={()=>removeTodo(todo.id)}>Deletar</button>
      </div>
    </div>
  );
};

export default Todo;

