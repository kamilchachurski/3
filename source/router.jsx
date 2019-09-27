import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeView from "screens/home/component/view";

const Router = () =>
(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ HomeView }/>
        </Switch>
    </BrowserRouter>
);

export default Router;