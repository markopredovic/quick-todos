import React, { useContext } from 'react';
import TodosContext from "../../context/todosContext";


const Footer = () => {
    const context = useContext(TodosContext)

  return (
    <div className="l-footer">
      <div className="l-container">
        <div className="l-lang">
          <ul>
            <li>
              <span
                onClick={() => context.setLanguage("rs")}
                className={
                  context.lang === "rs"
                    ? "m-active-lang lang-link"
                    : "lang-link"
                }
              >
                Srpski
              </span>
            </li>
            <li>|</li>
            <li>
              <span
                onClick={() => context.setLanguage("en")}
                className={
                  context.lang === "en"
                    ? "m-active-lang lang-link"
                    : "lang-link"
                }
              >
                English
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;