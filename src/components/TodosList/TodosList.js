import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LocalizedStrings from "react-localization";
import todosContext from "../../context/todosContext";
import Todo from "../../components/TodosList/Todo/Todo";
import { BASE_URL } from "../../types";

const TodosList = () => {
  let strings = new LocalizedStrings({
    en: {
      emptyList: "List is empty.",
      addItem: "Add todo"
    },
    rs: {
      emptyList: "Lista je prazna.",
      addItem: "Dodaj stavku"
    }
  });

  const context = useContext(todosContext);
  strings.setLanguage(context.lang);

  let todos = (
    <div className="l-empty-list">
      <p>{strings.emptyList}</p>
      <Link to={`${BASE_URL}/add-todo`}>{strings.addItem}</Link>
    </div>
  );

  const _getCurrentPageIndex = (currentPage, itemsPerPage) => {
    let _start = currentPage * itemsPerPage,
      _end = _start + itemsPerPage - 1;

    return [_start, _end];
  };

  const [startIndex, endIndex] = _getCurrentPageIndex(
    context.pagination.currentPage,
    context.pagination.itemsPerPage
  );

  if (context.todos.length) {
    todos = context.todos
      .filter((todo, index) => index >= startIndex && index <= endIndex)
      .map(todo => <Todo key={todo.id} {...todo} />);
  }

  return <div className="l-todos">{todos}</div>;
};

export default TodosList;
