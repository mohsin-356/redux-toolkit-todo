import React from 'react'

const addTodo = () => {
  return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default addTodo