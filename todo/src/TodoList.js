import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";


/**
 * Represents a TodoList component.
 * @function TodoList
 * @returns {JSX.Element}
 */

function TodoList() {
    const [todos, setTodos] = useState([]);

// add new todo
    const addTodo = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };

    // update a todo with updatedTask
    // use the id to find the todo to update
    const updateTodo = (id, updatedTask) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, task: updatedTask } : todo
            )
        );
    };

// delete a todo using id
    const deleteTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };
    // map over the todos and create a new Todo component for each todo
    const todoComponents = todos.map(todo => (
        <Todo
            deleteTodo={deleteTodo}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            updateTodo={updateTodo}
        />
    ));

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <ul>{todoComponents}</ul>
        </div>
    );
}
export default TodoList;