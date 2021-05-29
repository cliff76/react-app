import React from "react";

function Todos(props) {
    const [todo, setTodo] = React.useState();
    return (
    <div>
        <h1>Todo List</h1>
        <form name="todo-form">
            <label>
                Enter Todo <input type="text" onChange={e => setTodo({value: e.target.value})}/>
            </label>
            <button onClick={e => {e.preventDefault(); props.onAdd(todo.value)}}>Add</button>
        </form>
    </div>);
}

export {
    Todos
};