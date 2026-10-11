import React, { useState } from 'react'

const TodoList = () => {


    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");


    function deleteTodo(idToDelete) {
        setTodos(prev => prev.filter(todo => todo.id !== idToDelete))
    }

    return (
        <>

            <h1>My Todo List</h1>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
                if (!input.trim()) return;
                setTodos(prev => [...prev, { id: Date.now(), text: input, completed: false }]), setInput("")
            }} >Add Task</button>

          
            {todos.map(todo => (
                <div key={todo.id}>
                    <p>{todo.text}</p>

                    <button onClick={() => deleteTodo(todo.id)}>
                        Delete
                    </button>
                </div>
            ))}


        </>
    );
}

export default TodoList