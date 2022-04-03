import React, { Component } from "react";

// Loading Assets (SubComponents & CSS)
import "../css/name.css";

class Name extends Component {
  render() {
    return (
      <div className="name unselectable abs top left">
       <span className="my">3D - </span>Avatar
      </div>
    );
  }
}

export default Name;
