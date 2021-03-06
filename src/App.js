import React from "react";
import { Route } from "react-router-dom";

import {
  HeaderBlock,
  LinksBlock,
} from "./blocks";
import { HomePage, AboutPage, ContactsPage } from "./pages";
import { ButtonBackToTop } from "./plugins";

function App() {
  return (
    <div className="App">
      <HeaderBlock />
      <Route
        exact={true}
        name="Home"
        path="/site-inspire-react/"
        component={HomePage}
      />
      <Route
        name="About"
        path="/site-inspire-react/about"
        component={AboutPage}
      />
      <Route
        name="Contact"
        path="/site-inspire-react/contacts"
        component={ContactsPage}
      />
      <LinksBlock />
      <ButtonBackToTop />
    </div>
  );
}

export default App;
