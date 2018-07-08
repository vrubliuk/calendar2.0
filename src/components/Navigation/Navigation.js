import React, { Component } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {
    tabs: [
      {
        name: "Calendar",
        path: "/"
      },
      {
        name: "Editor",
        path: "/editor"
      },
      {
        name: "Settings",
        path: "/settings"
      }
    ]
  };

  render() {
    const tabs = this.state.tabs.map(tab => <li><NavLink exact to={tab.path} key={tab.name}>{tab.name}</NavLink></li>);
    return (
      <nav className="Navigation">
        <ul>
          {tabs}
        </ul>
      </nav>
    );
  }
}

export default Navigation;


