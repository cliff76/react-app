function Todos() {
    return (
    <div>
        <h1>Todo List</h1>
        <form name="todo-form">
            <label>
                Enter Todo <input type="text"/>
            </label>
            <button>Add</button>
        </form>
    </div>);
}

export {
    Todos
};