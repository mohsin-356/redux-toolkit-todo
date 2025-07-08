import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'; // Adjust the import path as necessary
const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    // handleSubmit function to handle form submission
    const addTodoHandler = (e) => {
        e.preventDefault();
        // input = input.trim();
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                placeholder="Add a new todo..."
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >Add</button>
        </form>

    )
}

export default AddTodo;