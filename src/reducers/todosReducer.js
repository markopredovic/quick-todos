import { ADD_TODO, LOAD_TODOS, TOGGLE_TODO, REMOVE_TODO } from "../types";

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case LOAD_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case TOGGLE_TODO:
      return toggleTodo(state, action.payload);
    case REMOVE_TODO:
      return removeTodo(state, action.payload);
    default:
      return state;
  }
};

const toggleTodo = (state, id) => {
  let updated_todos = state.todos.map(todo => {
    if(todo.id === id) {
      return {
        ...todo,
        isComplete: !todo.isComplete
      }
    } else {
      return todo
    }
  })

  return {
    ...state,
    todos: updated_todos
  }
}

const removeTodo = (state, id) => {
  let updated_todos = state.todos.filter(todo => {
    if (todo.id === id) {
      return null
    } else {
      return todo;
    }
  });

  console.log("Remove todo: ", updated_todos);

  return {
    ...state,
    todos: updated_todos
  };
};
