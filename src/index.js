
//React ,router and history
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from "react-router";
import createHashHistory from 'history/lib/createHashHistory';

//Views
import Layout from "./Layout";
import Home from "./views/Home";
import Contact from "./views/Contact";

//Actions
import * as Actions from "./actions";

//CSS
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/bootstrap/dist/css/bootstrap-theme.css');
require('font-awesome-webpack');

require('./css/all.css');

//Set history
const history = createHashHistory({ queryKey: false })
const app = document.getElementById('app');
Actions.config.configure();

//Set router
ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/contact" name="Contact" component={Contact}></Route>
    </Route>
  </Router>,
app);
