import React from 'react';
import { FaClipboardList, FaPlusSquare, FaFileArchive } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="l-header">
      <ul>
        <li>
          <NavLink
            to="/local-storage-todos"
            exact
            activeClassName="is-link-active"
          >
            <FaClipboardList />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/local-storage-todos/add-todo"
            exact
            activeClassName="is-link-active"
          >
            <FaPlusSquare />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/local-storage-todos/archive"
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