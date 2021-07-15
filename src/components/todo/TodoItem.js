import React, { useContext } from "react";
import { TodoContext } from "../../ConTexts/ContextTodo";
import { ThemeContext } from "../../ConTexts/ThemeContext";
import { DELETE_TODO } from "../../Reducer/Types";

const TodoItem = ({ todo }) => {
  const { theme } = useContext(ThemeContext);
  const { isFlag, light, dark } = theme;
  const style = isFlag ? light : dark;
  const { dispatch } = useContext(TodoContext);
  return (
    <li
      onClick={() => {
        dispatch({
          type: DELETE_TODO,
          payload: {
            id: todo.id,
          },
        });
      }}
      style={style}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;
