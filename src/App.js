import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/styles.scss";

import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Homepage from "./components/pages/Homepage";
import ArchivePage from "./components/pages/ArchivePage";

import useLocalStorage from "./hooks/useLocalStorage";
import TodosContext from "./context/todosContext";

function App() {
  const localStorageKey = "custom-hook-todos";
  const [
    state,
    addTodo,
    removeTodo,
    toggleTodo,
    archiveTodo,
    backToTodos
  ] = useLocalStorage(localStorageKey);

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        archive: state.archive,
        addTodo,
        toggleTodo,
        removeTodo,
        archiveTodo,
        backToTodos
      }}
    >
      <Router>
        <Header />
        <Switch>
          <Route path="/local-storage-todos" exact>
            <Homepage />
          </Route>
          <Route path="/local-storage-todos/add-todo" exact>
            <AddTodoForm />
          </Route>
          <Route path="/local-storage-todos/archive" exact>
            <ArchivePage />
          </Route>
        </Switch>
      </Router>
    </TodosContext.Provider>
  );
}

export default App;
