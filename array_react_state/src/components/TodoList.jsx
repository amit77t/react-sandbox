
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function deleteTodo(idToDelete) {
    setTodos(prev =>
      prev.filter(todo => todo.id !== idToDelete)
    );
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function addTodo() {
    if (!input.trim()) return;

    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text: input.trim(),
        completed: false
      }
    ]);

    setInput("");
  }

  return (
    <>
      <h1>My Todo List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTodo}>
        Add Task
      </button>

      {todos.map(todo => (
        <div key={todo.id}>
          <p
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none"
            }}
          >
            {todo.text}
          </p>

          <button onClick={() => toggleTodo(todo.id)}>
            {todo.completed ? "Undo" : "Complete"}
          </button>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
