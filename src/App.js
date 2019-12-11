import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/styles.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Homepage from "./components/pages/Homepage";
import ArchivePage from "./components/pages/ArchivePage";

import useLocalStorage from "./hooks/useLocalStorage";
import TodosContext from "./context/todosContext";

import { BASE_URL } from "./types";

function App() {
  const localStorageKey = "custom-hook-todos";
  const [
    state,
    addTodo,
    removeTodo,
    toggleTodo,
    archiveTodo,
    removeArchiveTodo,
    backToTodos,
    setCurrentPage,
    setLanguage
  ] = useLocalStorage(localStorageKey);

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        archive: state.archive,
        pagination: state.pagination,
        lang: state.lang,
        addTodo,
        toggleTodo,
        removeTodo,
        archiveTodo,
        removeArchiveTodo,
        backToTodos,
        setCurrentPage,
        setLanguage
      }}
    >
      <Router>
        <div className="l-container">
          <Header />
          <Switch>
            <Route path={BASE_URL} exact>
              <Homepage />
            </Route>
            <Route path={`${BASE_URL}/add-todo`} exact>
              <AddTodoForm />
            </Route>
            <Route path={`${BASE_URL}/archive`} exact>
              <ArchivePage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </TodosContext.Provider>
  );
}

export default App;
