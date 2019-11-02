import React, { useContext } from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import todosContext from "../../context/todosContext";
import ArchiveItem from "./ArchiveItem/ArchiveItem";

const Archive = () => {
  const context = useContext(todosContext);

  let archive = <div>
    Archive is empty <br/>
    (Arhiva je prazna)
  </div>;

  if (context.archive.length) {
    archive = context.archive.map(item => (
      <ArchiveItem key={item.key} {...item} />
    ));
  } else {
    ToastsStore.info("Archive is empty! \n(Arhiva je prazna)");
  }

  return (
    <>
      <ul className="l-archive">
        {archive}
        <ToastsContainer store={ToastsStore} />
      </ul>
    </>
  );
};

export default Archive;
