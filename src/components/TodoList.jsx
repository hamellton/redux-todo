import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunkCreator } from "../store/action-creators/todos";
import { onRemoveThunk, onToggleThunk } from "../store/action-creators/form";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(userThunkCreator());
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <ul>
      {todos.map((el) => {
        const classes = ["todo"];
        if (el.completed) {
          classes.push("completed");
        }
        return (
          <li key={el.id} className={classes.join(" ")}>
            <label>
              <input
                onChange={() => dispatch(onToggleThunk(el.id))}
                checked={el.completed}
                type="checkbox"
              />
              <span>{el.title}</span>
              <i
                onClick={() => dispatch(onRemoveThunk(el.id))}
                className="material-icons red-text"
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
