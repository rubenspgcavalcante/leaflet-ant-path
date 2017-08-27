import { render } from "react-dom";
import { connect, Provider } from "react-redux";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from "./store";
import "./style/app.scss";

import Header from "./modules/ui/components/containers/Header";

import { loadRepoInfo } from "./modules/core/actions/github";
import { Component as Home } from "./modules/home/index";

store.dispatch(loadRepoInfo());

const route = (path = '') => `${app.path}${path}`;

const App = connect()(() => (
  <Router >
    <div id="react-app" >
      <Header />
      <div className="section" >
        <Route exact path={route()} component={Home} />
        <Route path={route`docs/`} />
      </div >
      <div className="footer" />
    </div >
  </Router >
));

render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById("app")
);