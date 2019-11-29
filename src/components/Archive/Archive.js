import React, { useContext } from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import LocalizedStrings from "react-localization";
import todosContext from "../../context/todosContext";
import ArchiveItem from "./ArchiveItem/ArchiveItem";

const Archive = () => {
  let strings = new LocalizedStrings({
    en: {
      emptyArchive: "Archive is empty!"
    },
    rs: {
      emptyArchive: "Arhiva je prazna!"
    }
  });

  const context = useContext(todosContext);
  strings.setLanguage(context.lang)

  return (
    <>
      <ul className="l-archive">
        {context.archive.length ? (
          context.archive.map((item, index) => (
            <ArchiveItem
              key={index}
              {...item}
              length={context.archive.length}
            />
          ))
        ) : (
          <div>{strings.emptyArchive}</div>
        )}
      </ul>
    </>
  );
};

export default Archive;
