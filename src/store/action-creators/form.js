import {
  addTodoAction,
  onRemoveAction,
  onToggleAction,
  setTitle,
} from "../reducers/todoReducer";

export const setTitleThunk = (title) => {
  return (dispatch) => {
    dispatch(setTitle(title));
  };
};

export const addTodoThunk = (title) => {
  return (dispatch) => {
    dispatch(addTodoAction(title));
  };
};

export const onToggleThunk = (id) => {
  return (dispatch) => {
    dispatch(onToggleAction(id));
  };
};

export const onRemoveThunk = (id) => {
  return (dispatch) => {
    dispatch(onRemoveAction(id));
  };
};
