import React, { useContext } from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import LocalizedStrings from "react-localization";
import { FaUndoAlt } from "react-icons/fa";
import todosContext from "../../../context/todosContext";

const ArchiveItem = props => {

  let strings = new LocalizedStrings({
    en: {
      revertedToList: "Reverted to main list!"
    },
    sr: {
      revertedToList: "Vraceno u listu!"
    }
  });

  const context = useContext(todosContext);

  strings.setLanguage(context.lang);

  const handleBackFromArchive = () => {
    context.backToTodos(props.id);
    ToastsStore.warning(strings.revertedToList);
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
