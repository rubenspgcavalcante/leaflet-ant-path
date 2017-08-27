import { render } from "react-dom";
import { connect, Provider } from "react-redux";

import store from "./store";
import "./style/app.scss";

import Header from "./modules/ui/components/containers/Header";
import OptionsSample from "./components/containers/OptionsSample";
import { loadRepoInfo } from "./actions/github";

store.dispatch(loadRepoInfo());

let App = connect()(() => (
  <div >
    <Header />
    <div className="section" >
      <OptionsSample />
    </div >
    <div className="footer" ></div >
  </div >
));

render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById("app")
);