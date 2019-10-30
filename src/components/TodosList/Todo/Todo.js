import React, { useContext } from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { FaMinusCircle, FaFileArchive } from "react-icons/fa";
import todosContext from "../../../context/todosContext";

const Todo = props => {
  const context = useContext(todosContext);

  const handleRemoveTodo = () => {
    context.removeTodo(props.id);
    ToastsStore.error("Todo is deleted!");
  };

  const handleArchiveTodo = () => {
    context.archiveTodo(props.id);
    ToastsStore.info("Todo is archived!");
  };

  return (
    <div className="m-todo">
      <label>
        <input
          type="checkbox"
          checked={props.isComplete}
          onChange={() => context.toggleTodo(props.id)}
        />
        {props.name}
      </label>
      <button className="m-button red" onClick={handleRemoveTodo}>
        <FaMinusCircle />
      </button>
      <button className="m-button green" onClick={handleArchiveTodo}>
        <FaFileArchive />
      </button>
      <ToastsContainer store={ToastsStore} />
    </div>
  );
};

export default Todo;
