import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import App from "../containers/App";
import NewPage from "../containers/NewPage";

const routes = () => (
    <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/page" component={NewPage} />
    </BrowserRouter>
);


export default routes;