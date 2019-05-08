import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from './js/router';
import './myStyles.scss';

const App = () => (
  <div>
    <ReactRouter />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
