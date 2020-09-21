import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Такой страницы нет :/</h1>
          <p className="lead">
            <Link to="/" className="btn btn-link">на главную</Link>
          </p>
        </div>
      </div>
    </div>
  );
}