import {render} from "react-dom";
import {Provider, connect} from "react-redux";

import store from "./store";
import "./style/app.scss";

import Hero from "./components/stateless/Hero";
import OptionsSample from"./components/OptionsSample";

let App = connect()(() => (
    <div className="container">
        <Hero/>
        <div className="section">
            <OptionsSample />
        </div>
        <div className="footer"></div>
    </div>
));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);