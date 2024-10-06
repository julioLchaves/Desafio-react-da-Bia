import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div className="todo" key={todo.id}>
      <div className="content">
        <p>{todo.text}</p>
        <div className="category">({todo.category})</div>
      </div>
      <div>
        <button className='complete'>Completar</button>
        <button className='remove'>Deletar</button>
      </div>
    </div>
  );
};

export default Todo;

