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
    const newTodos = [...todos, {text:{value}, isCompleted: falso}]
    setValue(newTodos)
    setTodo("")
  }


 
  //removes a task from the list
  



 //it returns a list of todos, with an input field to insert new Todo's
  return (
    <>
        {
          todos.map((todo,i) => <div className="todo" key={i} id={i} >{todo.text}</div>)
        }

        <form onSubmit={handleSubmit}>

          <input type="text" value={value} placeholder="Add new todo" onChange={onChange} />

        </form>

        
    </>
  )
}

export default App
