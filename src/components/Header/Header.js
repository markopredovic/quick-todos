import React from 'react';
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
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/local-storage-todos/add-todo"
            exact
            activeClassName="is-link-active"
          >
            Add Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/local-storage-todos/archive"
            exact
            activeClassName="is-link-active"
          >
            Archive
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;