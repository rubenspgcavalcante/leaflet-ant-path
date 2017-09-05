import { render } from "react-dom";
import { connect, Provider } from "react-redux";

import { BrowserRouter as Router } from 'react-router-dom';

import store from "./store";
import "./style/app.scss";

import Header from "./modules/ui/components/containers/Header";
import Footer from "./modules/ui/components/stateless/Footer"
import { AppRoutes } from './modules/core/index';
import { loadRepoInfo } from "./modules/core/actions/github";
import { setupRoutes } from "./modules/core/actions/routes";

store.dispatch(loadRepoInfo());
store.dispatch(setupRoutes());

const mapStateToProps = ({ appRoutes }) => ({ appRoutes });

const App = connect(mapStateToProps)(({ appRoutes }) => (
  <Router >
    <div id="react-app" >
      <Header />
      <div className="section" >
        <AppRoutes appRoutes={appRoutes} />
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