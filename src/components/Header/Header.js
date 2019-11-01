import React from 'react';
import { FaClipboardList, FaPlusSquare, FaFileArchive } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Header = () => {

  const base_url = '/quick-todos'

  return (
    <nav className="l-header">
      <ul>
        <li>
          <NavLink to={base_url} exact activeClassName="is-link-active">
            <FaClipboardList />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${base_url}/add-todo`}
            exact
            activeClassName="is-link-active"
          >
            <FaPlusSquare />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${base_url}/archive`}
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