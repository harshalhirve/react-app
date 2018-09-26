import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import RootComponent from "./components/RootComponent";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <Route component={RootComponent} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("container")
);
