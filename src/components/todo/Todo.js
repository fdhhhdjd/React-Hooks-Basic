import React, { useContext, useState } from "react";
import { AuthContext } from "../../ConTexts/AuthContext";
import { TodoContext } from "../../ConTexts/ContextTodo";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
const Todos = () => {
  // Load context
  const { todos } = useContext(TodoContext);

  // Load auth context
  const { Auth } = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm />
      {Auth ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>Not authorised</p>
      )}
    </div>
  );
};
export default Todos;
