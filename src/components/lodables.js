import React from "react";
import Loadable from "react-loadable";

export const HomeComponent = Loadable({
  loader: () => import("./home/HomeComponent"),
  loading: () => <div>Loading....</div>
});
