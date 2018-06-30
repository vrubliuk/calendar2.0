import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    tabs: ["Calendar 2.0", "Editor", "Settings"],
    activeTab: "Calendar 2.0",
    isAuthorized: false
  };
  activateTab = tab => {
    this.setState({
      activeTab: tab
    });
  };
  render() {
    const tabs = this.state.tabs.map(tab => (
      <span
        className={tab === this.state.activeTab ? "active" : ""}
        onClick={this.activateTab.bind(this, tab)}
      >
        {tab}
      </span>
    ));
    return (
      <header className="Header">
        <nav className="Nav">{tabs}</nav>
        <button>{this.state.isAuthorized ? "Log out" : "Log in"}</button>
      </header>
    );
  }
}

export default Header;
