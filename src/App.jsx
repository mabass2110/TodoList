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
    const newTodos = [...todos, {text:{value}, isCompleted: false}];
    setValue(newTodos);
    setTodo("");
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
    <>
        {
          todos.map((todo,i) => <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)
        }

        <form onSubmit={handleSubmit}>

          <input type="text" value={value} placeholder="Add new todo" onChange={onChange} />

        </form>

        
    </>
  )
}

export default App
