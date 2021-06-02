import {
  fetchTodoAction,
  fetchTodoErrorAction,
  fetchTodoSuccessAction,
} from "../reducers/todoReducer";
import axios from "axios";

export const userThunkCreator = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchTodoAction());
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch(fetchTodoSuccessAction(response.data));
    } catch (e) {
      dispatch(
        fetchTodoErrorAction("Произошла ошибка при загрузке пользоватеелей!")
      );
    }
  };
};
