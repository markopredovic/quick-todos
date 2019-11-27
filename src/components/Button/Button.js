import React, { useContext } from "react";
import TodosContext from "../../context/todosContext";

const Button = ({ index }) => {
  const context = useContext(TodosContext);

  const isCurrent = index === context.pagination.currentPage;

  return (
    <button
      className={isCurrent ? "current btn-pagination" : "btn-pagination"}
      onClick={() => context.setCurrentPage(index)}
    >
      {index + 1}
    </button>
  );
};

export default Button;
