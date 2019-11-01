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
  const base_url = '/quick-todos'
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
        <div className="l-container">
          <Header />
          <Switch>
            <Route path={base_url} exact>
              <Homepage />
            </Route>
            <Route path={`${base_url}/add-todo`} exact>
              <AddTodoForm />
            </Route>
            <Route path={`${base_url}/archive`} exact>
              <ArchivePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </TodosContext.Provider>
  );
}

export default App;
