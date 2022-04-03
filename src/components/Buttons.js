import React, { Component } from "react";
import ReactGA from "react-ga";
import PostForm from './PostForm';

// Loading Assets (SubComponents & CSS)
import "../css/buttons.css";

class Buttons extends Component {
  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      accesstoken: ''
    }
  }

  updateVisible = formVisible => {
    this.setState({ formVisible });
  };

  componentDidMount() {
    // Google Analytics for the page
    ReactGA.initialize("UA-41837285-1");
  }

  render() {

    const redirectUri = (process.env.NODE_ENV==="development") ? 'http://localhost:3000' : 'https://www.myminifactory.com/character-creator/';
    const clientKey = (process.env.NODE_ENV==="development") ? 'customizerDev' : 'character-creator';

    const onSuccess = response => {
      console.log(response.access_token)
      this.setState({formVisible: true})
      this.setState({accesstoken: response.access_token})
    }
    const onFailure = response => console.error(response);


    return (
      <div>
        <PostForm
          visible={this.state.formVisible}
          updateVisible={this.updateVisible}
          accesstoken={this.state.accesstoken}
         />
      </div>
    );
  }
}

export default Buttons;
