import logo from './logo.svg';
import './App.css';
import React from "react";


function App() {

  const [todos, setTodos] = React.useState([])

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={event => {
            event.preventDefault()
            setTodos(todos => [...todos, event.target.addTodo.value])
          }}>
            <label className="Form-component" htmlFor='addTodo'>
              New To-Do:
              <input className="Form-component" name='addTodo'/>
            </label>
            <input type='submit' value='Add Todo' />
          </form>
          <p>
            My To-Dos
          </p>
          {
            todos.map(each => {
              return ( <div>{each}</div> )
            })
          }
        </header>
      </div>
  );
}

export default App;
