import React, { useContext } from "react";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import LocalizedStrings from "react-localization";

import {
  FaMinusCircle,
  FaFileArchive,
  FaCheckCircle,
  FaRegCircle
} from "react-icons/fa";
import todosContext from "../../../context/todosContext";

const Todo = props => {
  let strings = new LocalizedStrings({
    en: {
      itemDeleted: "Item is deleted!",
      itemArchived: "Item is archived!"
    },
    rs: {
      itemDeleted: "Stavka je obrisana!",
      itemArchived: "Stavka je arhivirana!"
    }
  });

  const context = useContext(todosContext);

strings.setLanguage(context.lang);

  const handleRemoveTodo = () => {
    context.removeTodo(props.id);
    ToastsStore.error(strings.itemDeleted);
  };

  const handleArchiveTodo = () => {
    context.archiveTodo(props.id);
    ToastsStore.info(strings.itemArchived);
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
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
    </div>
  );
};

export default Todo;
