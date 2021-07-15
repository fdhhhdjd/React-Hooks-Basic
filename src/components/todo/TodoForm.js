import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../../ConTexts/ContextTodo";
import { ThemeContext } from "../../ConTexts/ThemeContext";
import { ADD_TODO } from "../../Reducer/Types";
const TodoForm = ({}) => {
  const { theme } = useContext(ThemeContext);
  const { isFlag, light, dark } = theme;
  const style = isFlag ? light : dark;

  const [title, setTitle] = useState("");

  const { dispatch } = useContext(TodoContext);

  // const { dispatch } = useContext(TodoContext);

  const HandleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo({
    //   id: uuidv4(),
    //   title,
    // });
    dispatch({
      type: ADD_TODO,
      payload: {
        todo: {
          id: uuidv4(),
          title,
        },
      },
    });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter a new todo..."
          onChange={HandleChange}
          value={title}
          required
        />
        <input type="submit" value="Add" style={style} />
      </form>
    </div>
  );
};

export default TodoForm;
