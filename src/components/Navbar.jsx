import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
      <NavLink exact className="navbar-brand" to="/">GitHub поиск</NavLink>
      <button className="navbar-toggler border border-w-2" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-auto flex-grow-0" id="navbarTogglerDemo01">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">главная</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/about">информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}