import React, { useState } from 'react'

const addTodo = () => {
const [input, setInput] =useState("");
    // handleSubmit function to handle form submission
    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            // Dispatch the addTodo action with the input value
            setInput("");
        }
    };

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                placeholder="Add a new todo..."
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >Add</button>

        </form>

    )
}

export default addTodo;