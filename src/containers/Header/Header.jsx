import React, { Component } from "react";
import "./Header.css";
import Navigation from "../../components/Navigation/Navigation.jsx";
import {withRouter} from "react-router-dom";

class Header extends Component {
  state = {
    isAuthorized: false
  };

  handleClickAuthButton = () => {
    this.props.history.push('/authentication')
  };

  render() {
    return (
      <header className="Header">
        <Navigation />
        <button onClick={this.handleClickAuthButton}>
          {this.state.isAuthorized ? "Log out" : "Log in"}
        </button>
      </header>
    );
  }
}

export default withRouter(Header);
