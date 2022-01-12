import React from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

function TodoForm({ addToDo, index }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addToDo(addToDo);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
    
    <input
      type="text"
      className="input"
      value={value}
      onChange={e => setValue(e.target.value)} 
    />

    <button onClick={()=> addToDo(index)}>Add To List</button>
    </form>
  );

}


function App() {
  const [todos, setTodos] = React.useState([
    { text: "Go to work", isCompleted: false },
    { text: "Learn Coding", isCompleted: false },
    { text: "Workout at the gym", isCompleted: false },
    { text: "Feed cats", isCompleted: false},
    { text: "Cook dinner", isCompleted: false}

  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };



  return (
    <div className="app">
      <div className="to-do-list">
        {todos.map((todo, index) => (
          <Todo 
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />  
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;