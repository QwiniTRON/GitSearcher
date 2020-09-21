import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import $ from 'jquery'
import Popper from 'popper.js'
import bootstrapjs from 'bootstrap'
import AlertState from './context/Alert/alertState.jsx'
import GitHubState from './context/Github/GitHubState'

ReactDOM.render(
  <GitHubState>
    <AlertState>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </AlertState>
  </GitHubState>
  ,
  document.getElementById('root')
);

