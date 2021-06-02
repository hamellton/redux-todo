import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoThunk, setTitleThunk } from "../store/action-creators/form";

const TodoForm = () => {
  let ref = React.createRef("");

  const dispatch = useDispatch();

  const { title } = useSelector((state) => state.todos);

  const addTodo = (event) => {
    if (event.key === "Enter") {
      dispatch(addTodoThunk(ref.current.value));
      dispatch(setTitleThunk(""));
    }
  };

  return (
    <div className="input-field mt3">
      <input
        onKeyPress={addTodo}
        ref={ref}
        onChange={() => dispatch(setTitleThunk(ref.current.value))}
        value={title}
        type="text"
        id="title"
        placeholder="Введите текст"
      />
      <label htmlFor="title" className="active">
        Введите текст
      </label>
    </div>
  );
};

export default TodoForm;
