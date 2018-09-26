import React, { Component } from "react";
import TopLinks from "../common/TopLinks";

class HomeComponent extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <TopLinks />
        </div>
        <div>HomeComponent</div>
      </div>
    );
  }
}

export default HomeComponent;
