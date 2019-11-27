import React, { useContext } from "react";
import TodosList from "../../TodosList/TodosList";
import Pagination from "../../Pagination";
import TodosContext from "../../../context/todosContext";

const Homepage = () => {
  const context = useContext(TodosContext);

  const _isPagination = () => {
    return context.todos.length <= context.pagination.itemsPerPage
      ? false
      : true;
  };

  return (
    <>
      <TodosList />
      {_isPagination() && <Pagination />}
    </>
  );
};

export default Homepage;
