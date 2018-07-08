import React, { Component } from "react";
import "./Header.css";
import Navigation from "../../components/Navigation/Navigation";

class Header extends Component {
  state = {
    tabs: ["Calendar 2.0", "Editor", "Settings"],
    activeTab: "Calendar 2.0",
    isAuthorized: false
  };
  render() {
    return (
      <header className="Header">
        <Navigation />
        <button>{this.state.isAuthorized ? "Log out" : "Log in"}</button>
      </header>
    );
  }
}

export default Header;
