import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Contact from './pages/Contact';
import { Route, Switch, BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/movies" exact={true} component={Movies} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

