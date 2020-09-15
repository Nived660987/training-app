import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './authentication/auth/Login';
import Home from './Home';
import AddWorkout from "./Admin/AddWorkout";
import Paperbase from './Admin/Dashboard/Paperbase';
import Covid from './Covid';


ReactDOM.render(
  <React.StrictMode>
    <Paperbase/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
