
import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/**
 * Rendering a form for creating a new todo item.
 * @param {Object} props -
 * @param {Function} props.addTodo 
 * @returns {JSX.Element} 
 */
// Function to create a new todo item
function NewTodoForm({ addTodo }) {
    const [task, setTask] = useState("");
    // Handle the form submission
    const handleSubmit = e => {
        e.preventDefault();
        addTodo({ task, id: uuid() });
        setTask("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input
                type="text"
                id="task"
                name="task"
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button>Add a todo!</button>
        </form>
    );
}
export default NewTodoForm;