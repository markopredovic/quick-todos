import React, { useContext, useState } from "react";
import todosContext from "../../context/todosContext";
import ArchiveItem from "./ArchiveItem/ArchiveItem";

const Archive = () => {
  const context = useContext(todosContext);
  const [toggle, setToggle] = useState(false);

  console.log("context:", context);

  const archive = context.archive.map(item => (
    <ArchiveItem key={item.key} {...item} />
  ));

  console.log("archive:", archive);

  return (
    <>
      {archive.length ? (
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? "Hide" : "Show"} archive
          </button>
          <div style={{ display: toggle ? "block" : "none" }}>{archive}</div>
        </div>
      ) : null}
    </>
  );
};

export default Archive;
