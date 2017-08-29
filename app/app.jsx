import { render } from "react-dom";
import { connect, Provider } from "react-redux";

import { BrowserRouter as Router } from 'react-router-dom';

import store from "./store";
import "./style/app.scss";

import Header from "./modules/ui/components/containers/Header";
import Footer from "./modules/ui/components/stateless/Footer"

import { loadRepoInfo } from "./modules/core/actions/github";
import { routesFactory } from "./routes";

store.dispatch(loadRepoInfo());
const routeComponents = routesFactory();

const App = connect()(() => (
  <Router >
    <div id="react-app" >
      <Header />
      <div className="section" >
        {routeComponents}
      </div >
      <Footer />
    </div >
  </Router >
));

render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById("app")
);