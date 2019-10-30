import React, { useContext } from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import {
  FaMinusCircle,
  FaFileArchive,
  FaCheckCircle,
  FaRegCircle
} from "react-icons/fa";
import todosContext from "../../../context/todosContext";

const Todo = props => {
  const context = useContext(todosContext);

  const handleRemoveTodo = () => {
    context.removeTodo(props.id);
    ToastsStore.error("Item is deleted! \n(Stavka je obrisana)");
  };

  const handleArchiveTodo = () => {
    context.archiveTodo(props.id);
    ToastsStore.info("Item is archived! \n(Stavka je arhivirana!)");
  };

  return (
    <div className="m-todo">
      <label>
        <input
          type="checkbox"
          checked={props.isComplete}
          onChange={() => context.toggleTodo(props.id)}
        />
        <span className="m-unchecked m-checkbox-icon">
          <FaRegCircle />
        </span>
        <span className="m-checked m-checkbox-icon">
          <FaCheckCircle />
        </span>

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
