import React from 'react';
import './App.css';

import Title from './components/Title/Title';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodosList from './components/TodosList/TodosList';
import Archive from './components/Archive/Archive'

import useLocalStorage from './hooks/useLocalStorage';
import TodosContext from './context/todosContext';



function App() {
  const localStorageKey = "custom-hook-todos";
  const [state, addTodo, removeTodo, toggleTodo, archiveTodo, backToTodos] = useLocalStorage(localStorageKey);
  
  return (
    <TodosContext.Provider value={{todos: state.todos, archive: state.archive, addTodo, toggleTodo, removeTodo, archiveTodo, backToTodos}}>
      <div className="App">
        <Title title="Todos" />
        <AddTodoForm />
        <TodosList />
        <Archive />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
