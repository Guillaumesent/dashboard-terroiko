import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";

// import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Route principale vers le dashboard */}
      <Route path="/admin" component={Admin} />
      {/* Redirection de la racine vers /admin */}
      <Redirect exact from="/" to="/admin" />
      {/* Fallback vers /admin si route inconnue */}
      <Redirect from="*" to="/admin" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
