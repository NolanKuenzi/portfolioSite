import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';

const ReactRouter = () => (
  <Router>
    <div id="routerDiv">
      <ul id="routerUl">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
      <Route path="/" exact component={About} />
      <Route path="/portfolio/" exact component={Portfolio} />
      <Route path="/contact/" exact component={Contact} />
    </div>
  </Router>
);
export default ReactRouter;
