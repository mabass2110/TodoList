import React, { useState } from 'react'

import './App.css'

function App() {

  //todos state with initial value as an array of objects
  const [todos, setTodo] = useState([


    {
      text: 'learn react',
      isCompleted: false,
    }
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

 
  //removes a task from the list
  



 //it returns a list of todos, with an input field to insert new Todo's
  return (
    <>
        {
          todos.map((todo,i) => <div className="todo" key={i} id={i} >{todo.text}</div>)
        }

        <form >

          <input type="text" value={value} placeholder="Add new todo" />

        </form>

        
    </>
  )
}

export default App
