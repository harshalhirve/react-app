import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ErrorHandler from "./common/ErrorHandler";
import NotFoundComponent from "./notfound/NotFoundComponent";
import * as loadables from "./lodables";

class RootComponent extends Component {
  render() {
    return (
      <div className="container">
        <ErrorHandler>
          <Switch>
            <Route exact path="/" component={loadables.HomeComponent} />
            <Route path="**" component={NotFoundComponent} />
          </Switch>
        </ErrorHandler>
      </div>
    );
  }
}

export default RootComponent;
