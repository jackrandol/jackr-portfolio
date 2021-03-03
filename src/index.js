import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithRouter from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <AppWithRouter />
  </BrowserRouter>,
  document.getElementById('root')
);
