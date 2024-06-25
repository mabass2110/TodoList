import React, { useState } from 'react'

import './App.css'

function App() {

  //todos state with initial value as an array of objects
  const [todos, setTodo] = useState([


    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build react',
      isCompleted: false,
    } 

  ])
  

 


  //input value state
  const [value,setValue] = React.useState('');

   //onChange method

    const onChange = e => setValue(e.target.value);

    //onSubmit method
    const handleSubmit = e => {
    
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text:value, isCompleted: false}];
    setTodo(newTodos);
    setValue("");
  }
  //removes a task from the list
  const removeTodo = e => {
    const index = Number(e.target.id);
    const temp = [...todos];
    temp.splice(index,1)
    setTodo(temp);
  }
 //it returns a list of todos, with an input field to insert new Todo's
  return (
    <div className='app-container text-center' >
    
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.text}>
            <div className="todo" onClick={() => removeTodo(todo.text)}>
              {todo.text}
            </div>
          </li>
        ))}
      </ul>

        <form onSubmit={handleSubmit}>

          <input type="text"
                 value={value}
                 placeholder="Add new todo"
                 onChange={onChange} 
              />

        </form>

        
    </div>
  )
}

export default App
