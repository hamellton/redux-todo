const FETCH_USER = "FETCH_USER";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";
const ADD_TODO = "ADD_TODO";
const SET_TITLE = "SET_TITLE";
const ON_TOGGLE = "ON_TOGGLE";
const ON_REMOVE = "ON_REMOVE";

const initialState = {
  todos: [],
  loading: true,
  error: null,
  title: "",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER: {
      return { loading: true, error: null, todos: [], title: "" };
    }
    case FETCH_USER_SUCCESS: {
      return { loading: false, error: null, todos: action.payload, title: "" };
    }
    case FETCH_USER_ERROR: {
      return { loading: false, error: action.payload, todos: [], title: "" };
    }
    case ADD_TODO: {
      let newState = { ...state };
      const newTodo = {
        id: Date.now(),
        title: action.title,
        completed: false,
      };
      newState.todos = [newTodo, ...newState.todos];
      return newState;
    }
    case SET_TITLE: {
      return {
        loading: false,
        error: action.payload,
        todos: [...state.todos],
        title: action.title,
      };
    }
    case ON_TOGGLE: {
      let copyState = { ...state };
      copyState.todos = [...state.todos];
      copyState.todos.map((el) => {
        if (el.id === action.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      });

      return copyState;
    }
    case ON_REMOVE: {
      // let copyState = { ...state };
      // copyState.todos = [...state.todos];
      // copyState.todos.filter((el) => el.id !== action.id);
      let copyState = { ...state };
      copyState.todos = [...state.todos];
      copyState.todos.pop();
      console.log(copyState.todos);
      console.log("test remove id: ", action.id);
      return copyState;
    }
    default:
      return state;
  }
};

export const fetchTodoAction = () => ({ type: FETCH_USER });

export const fetchTodoSuccessAction = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});

export const fetchTodoErrorAction = (payload) => ({
  type: FETCH_USER_ERROR,
  payload,
});

export const addTodoAction = (title) => ({ type: ADD_TODO, title });

export const setTitle = (title) => ({ type: SET_TITLE, title });

export const onToggleAction = (id) => ({ type: ON_TOGGLE, id });

export const onRemoveAction = (id) => ({ type: ON_REMOVE, id });
