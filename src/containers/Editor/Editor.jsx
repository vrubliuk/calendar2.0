import React, { Component } from "react";
import "./Editor.css";
import ExtendedView from "../../components/ExtendedView/ExtendedView";
import Employees from "../../components/Employees/Employees.jsx"

class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        <ExtendedView />
        <Employees />
      </div>
    );
  }
}

export default Editor;
