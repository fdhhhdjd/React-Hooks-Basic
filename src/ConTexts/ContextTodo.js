import React, { createContext, useEffect, useState, useReducer } from "react";
import { todoReducer } from "../Reducer/TodoReducer";
import { GET_TODOS, SAVE_TODOS } from "../Reducer/Types";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "Run one",
  //   },
  //   {
  //     id: 2,
  //     title: "Run True",
  //   },
  // ]);
  // //useEffect
  // useEffect(() => {
  //   console.log("Run time true");
  //   const todos = localStorage.getItem("todos");
  //   if (todos) setTodos(JSON.parse(todos));
  // }, []);

  // useEffect(() => {
  //   console.log("Run time one");
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);
  // const addTodo = (todo) => {
  //   setTodos([...todos, todo]);
  // };
  // const DeleteTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  // useReducer
  const [todos, dispatch] = useReducer(todoReducer, []);

  // useEffect
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos },
    });
  }, [todos]);

  const todoContextData = {
    todos,
    dispatch,
  };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
