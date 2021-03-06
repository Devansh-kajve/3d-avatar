import React, { Component } from "react";

import "../css/logo.css";
import logo from "../graphic_assets/logo_with_base.png";

class Logo extends Component {

  render() {
    return (
      <div className="abs logo">
        <a href="#">
          <span className="abs"></span>
          <img src={logo} alt="logo" />
        </a>
      </div>
    );
  }
}

export default Logo;
