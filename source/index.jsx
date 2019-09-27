(process.env.NODE_ENV === "development") &&
    module.hot.accept();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Router from "router";

import store from "redux/store";

import "assets/styles/fonts.scss";
import "assets/styles/normalize.scss";

const ReactReduxProject = () =>
(
    <Provider store={ store }>
        <Router/>
    </Provider>
);

ReactDOM.render(<ReactReduxProject/>, document.getElementById("reactReduxProject"));