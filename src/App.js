import logo from './logo.svg';
import './App.css';
import React from "react";


function TodoInput() {
  return <div>
    <label className="Form-component" htmlFor="addTodo">
      New To-Do:
      <input className="Form-component" name="addTodo"/>
    </label>
    <input type="submit" value="Add Todo"/>
  </div>;
}

function TodoOutput(props) {
  return <div>
    <p>
      My To-Dos
    </p>
    {
      props.todos.map(props.callbackfn)
    }
  </div>;
}

function TodoItem(props) {
  return <div>{props.each}</div>;
}

function App() {

  const [todos, setTodos] = React.useState([])

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <form onSubmit={event => {
            event.preventDefault()
            setTodos(todos => [...todos, event.target.addTodo.value])
          }}>
            <TodoInput/>
          </form>
          <TodoOutput todos={todos} callbackfn={(each, index) =>
              (<TodoItem key={index} each={each}/>)
          }/>
        </header>
      </div>
  );
}

export default App;
