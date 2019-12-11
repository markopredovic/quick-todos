import React, { useContext } from "react";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import LocalizedStrings from "react-localization";
import { FaUndoAlt, FaTimes } from "react-icons/fa";
import todosContext from "../../../context/todosContext";

const ArchiveItem = props => {
  let strings = new LocalizedStrings({
    en: {
      revertedToList: "Reverted to main list!",
      removeArchiveTodo: "Item removed from archive"
    },
    rs: {
      revertedToList: "Vraceno u listu!",
      removeArchiveTodo: "Stavka je izbrisana iz arhive"
    }
  });

  const context = useContext(todosContext);

  strings.setLanguage(context.lang);

  const handleBackFromArchive = () => {
    ToastsStore.warning(strings.revertedToList);

    props.length === 1
      ? setTimeout(() => {
          context.backToTodos(props.id);
        }, 800)
      : context.backToTodos(props.id);
  };

  const handleRemoveArchiveTodo = () => {
    ToastsStore.success(strings.removeArchiveTodo);

    props.length === 1
      ? setTimeout(() => {
          context.removeArchiveTodo(props.id);
        }, 800)
      : context.removeArchiveTodo(props.id);
  };

  return (
    <li>
      <div className="l-archive-item">
        <span>{props.name}</span>
        <button className="m-button red" onClick={handleRemoveArchiveTodo}>
          <FaTimes />
        </button>
        <button className="m-button blue" onClick={handleBackFromArchive}>
          <FaUndoAlt />
        </button>
      </div>
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
    </li>
  );
};

export default ArchiveItem;
