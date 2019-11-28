import React, { useContext } from 'react';
import { FaClipboardList, FaPlusSquare, FaFileArchive } from "react-icons/fa";
import TodosContext from '../../context/todosContext'
import { NavLink } from 'react-router-dom'
import { BASE_URL } from '../../types'

const Header = () => {

  const context = useContext(TodosContext)

  return (
    <nav className="l-header">
      <div className="l-lang">
        <ul>
          <li>
            <button onClick={() => context.setLanguage("rs")}>Srpski</button>
          </li>
          <li>|</li>
          <li>
            <button onClick={() => context.setLanguage("en")}>English</button>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <NavLink to={BASE_URL} exact activeClassName="is-link-active">
            <FaClipboardList />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${BASE_URL}/add-todo`}
            exact
            activeClassName="is-link-active"
          >
            <FaPlusSquare />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${BASE_URL}/archive`}
            exact
            activeClassName="is-link-active"
          >
            <FaFileArchive />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;