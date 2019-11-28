import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    strings.setLanguage(context.lang);
    console.log("[LANG SYNC]", strings.emptyArchive);
  }, [context.lang]);

  const emptyArchiveMessage = () => {
    strings.setLanguage(context.lang);
    return strings.emptyArchive;
  }

  return (
    <>
      <ul className="l-archive">
        {context.archive.length ? (
          context.archive.map((item, index) => (
            <ArchiveItem key={index} {...item} />
          ))
        ) : (
          <div>{emptyArchiveMessage()}</div>
        )}
        <ToastsContainer store={ToastsStore} />
      </ul>
    </>
  );
};

export default Archive;
