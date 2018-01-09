import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App";
import Podcast from "./components/Podcast";
import Movies from "./components/Movies";
import TV from "./components/Tv";

const Routes = props => (
  <Router {...props}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/movies" component={Movies} />
      <Route path="/tv" component={TV} />
    </div>
  </Router>
);

export default Routes;
