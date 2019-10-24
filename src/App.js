import React, { useReducer, useEffect } from 'react';
import './App.css';

import Title from './components/Title/Title';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodosList from './components/TodosList/TodosList';

import TodosContext from './context/todosContext';
import todosReducer from './reducers/todosReducer';
import { ADD_TODO, LOAD_TODOS, TOGGLE_TODO, REMOVE_TODO } from './types';


function App() {

  const initialState = {
    todos: []
  }

  const [state, dispatch] = useReducer(todosReducer, initialState)
  
  // load todos from local storage
  useEffect(() => {
    console.log('Load todos from local starage')
    const todos = JSON.parse(window.localStorage.getItem('custom-hook-todos'));

    if(todos) {
      dispatch({type: LOAD_TODOS, payload: todos})
    }
  }, [])

  const addTodo = todo => {
    let updated_todos = [...state.todos, todo];

    window.localStorage.setItem('custom-hook-todos', JSON.stringify(updated_todos));  

    
    dispatch({type: ADD_TODO, payload: todo})
  }

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

    window.localStorage.setItem(
      "custom-hook-todos",
      JSON.stringify(updated_todos)
    );
    
    // dispatch action
    dispatch({type: TOGGLE_TODO, payload: id})
  }

  const removeTodo = id => {
    // update local storage
    let updated_todos = [...state.todos].filter(todo => {
      if (todo.id === id) {
        return null
      } else {
        return todo;
      }
    });

    window.localStorage.setItem(
      "custom-hook-todos",
      JSON.stringify(updated_todos)
    );
    
    // dispatch action
    dispatch({type: REMOVE_TODO, payload: id})
  }
  
  return (
    <TodosContext.Provider value={{todos: state.todos, addTodo, toggleTodo, removeTodo}}>
      <div className="App">
        <Title title="Local Storage Todos" />
        <AddTodoForm />
        <TodosList />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
