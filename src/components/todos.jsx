import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,removeTodo, updateTodo } from '../features/todo/todoSlice' // Adjust the import path as necessary
const todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
  return (
   <>
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Todos</h2>

  <ul className="space-y-3">
    {todos.map((todo) => (
      <li
        key={todo.id}
        className="flex justify-between items-center bg-white shadow-md rounded-md p-4 border border-gray-200"
      >
        <span className="text-gray-700 text-base">{todo.text}</span>

        <div className="space-x-2">
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded transition"
          >
            Delete
          </button>

          {/* Future Edit Button */}
          {/* <button
            onClick={() => dispatch(updateTodo(todo.id))}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded transition"
          >
            Edit
          </button> */}
        </div>
      </li>
    ))}
  </ul>
</>

  )
}

export default todos