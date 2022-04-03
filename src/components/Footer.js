import React, { Component } from "react";
import Popup from './Popup';

import "../css/footer.css";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      popup: false
    };
  }

  updatePopup = popup => {
    this.setState({ popup });
  };

  render() {
    return (
      <div>
        <Popup
            popupDisplayed={this.state.popup}
            message={this.state.message}
            updatePopup={this.updatePopup}
        />
      </div>
    );
  }
}

export default Footer;
