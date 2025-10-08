import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <form className="todo-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task..."
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;