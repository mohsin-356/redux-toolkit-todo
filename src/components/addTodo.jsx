import React from 'react'

const addTodo = () => {
    // handleSubmit function to handle form submission

    return (
        <form className="max-w-md mx-auto mt-10 px-4">
            <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg shadow-sm p-2 focus-within:ring-2 focus-within:ring-teal-500">
                <input
                    type="text"
                    placeholder="Add a new todo..."
                    className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 outline-none px-2 py-1"
                />
                <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-all duration-200"
                >
                    Add
                </button>
            </div>
        </form>

    )
}

export default addTodo;