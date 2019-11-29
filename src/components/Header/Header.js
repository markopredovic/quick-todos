import React from 'react';
import { FaClipboardList, FaPlusSquare, FaFileArchive } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { BASE_URL } from '../../types'

const Header = () => {
  return (
    <nav className="l-header">
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