import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,removeTodo, updateTodo } from '../features/todo/todoSlice' // Adjust the import path as necessary
const todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
  return (
    <>
        <h2>Todos</h2>
        {todos.map((todo)=>{
            return <li key={todo.id}>
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                {/* <button onClick={() => dispatch(updateTodo(todo.id))}>Edit</button> */}
            </li>
        })}
    </>
  )
}

export default todos