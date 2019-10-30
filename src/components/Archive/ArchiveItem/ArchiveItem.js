import React, { useContext } from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { FaUndoAlt } from "react-icons/fa";
import todosContext from "../../../context/todosContext";

const ArchiveItem = props => {
  const context = useContext(todosContext);

  const handleBackFromArchive = () => {
    context.backToTodos(props.id);
    ToastsStore.warning("Reverted to main list! \n(Vraceno u listu!)");
  };

  return (
    <li>
      <div className="l-archive-item">
        <span>{props.name}</span>
        <button className="m-button blue" onClick={handleBackFromArchive}>
          <FaUndoAlt />
        </button>
      </div>
      <ToastsContainer store={ToastsStore} />
    </li>
  );
};

export default ArchiveItem;
