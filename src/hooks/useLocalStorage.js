import { useReducer, useEffect } from "react";
import todosReducer from "../reducers/todosReducer";
import {
  ADD_TODO,
  LOAD_TODOS,
  TOGGLE_TODO,
  REMOVE_TODO,
  ADD_TODO_ARCHIVE,
  LOAD_TODOS_ARCHIVE,
  BACK_TODO,
  SET_CURRENT_PAGE,
  SET_LANG
} from "../types";

/*
    razmisljanje o generalizaciji problema
*/

const useLocalStorage = key => {
  const initialState = {
    todos: [],
    archive: [],
    pagination: {
      itemsPerPage: 10,
      currentPage: 0
    },
    lang: 'rs'
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  // load todos from local storage
  useEffect(() => {
    const todos = JSON.parse(window.localStorage.getItem(key));

    if (todos) {
      dispatch({
        type: LOAD_TODOS,
        payload: todos
      });
    }
  }, []);

  // load archive
  useEffect(() => {
    const archive = JSON.parse(window.localStorage.getItem(`${key}-archive`));

    if (archive) {
      dispatch({
        type: LOAD_TODOS_ARCHIVE,
        payload: archive
      });
    }
  }, []);

  const addTodo = todo => {
    let updated_todos = [...state.todos, todo];

    window.localStorage.setItem(key, JSON.stringify(updated_todos));

    dispatch({ type: ADD_TODO, payload: todo });
  };

  const toggleTodo = id => {
    // update local storage
    let updated_todos = [...state.todos].map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isComplete
        };
      } else {
        return todo;
      }
    });

    window.localStorage.setItem(key, JSON.stringify(updated_todos));

    // dispatch action
    dispatch({ type: TOGGLE_TODO, payload: id });
  };

  const removeTodo = id => {
    // update local storage
    let updated_todos = [...state.todos].filter(todo => {
      if (todo.id === id) {
        return null;
      } else {
        return todo;
      }
    });

    window.localStorage.setItem(key, JSON.stringify(updated_todos));

    // dispatch action
    dispatch({ type: REMOVE_TODO, payload: id });
  };

  const archiveTodo = id => {
    const archiveTodo = state.todos.filter(todo => todo.id === id)[0];

    const updatedArchive = [...state.archive, archiveTodo];

    const updatedTodos = [...state.todos].filter(item => item.id !== id);

    window.localStorage.setItem(
      `${key}-archive`,
      JSON.stringify(updatedArchive)
    );

    window.localStorage.setItem(`${key}`, JSON.stringify(updatedTodos));

    dispatch({ type: ADD_TODO_ARCHIVE, payload: id });
  };

  const backToTodos = id => {
    const currentTodo = state.archive.filter(item => item.id === id)[0];
    currentTodo.isComplete = false;
    const updatedArchive = state.archive.filter(item => item.id !== id);
    const updatedTodos = [...state.todos, currentTodo];

    window.localStorage.setItem(
      `${key}-archive`,
      JSON.stringify(updatedArchive)
    );

    window.localStorage.setItem(`${key}`, JSON.stringify(updatedTodos));

    dispatch({type: BACK_TODO, payload: id})
  };

  const setCurrentPage = index => {
    dispatch({type: SET_CURRENT_PAGE, payload: index})
  }

  const setLanguage = lang => dispatch({type: SET_LANG, payload: lang})

  return [state, addTodo, removeTodo, toggleTodo, archiveTodo, backToTodos, setCurrentPage, setLanguage];
};

export default useLocalStorage;
