import React, { Component } from "react";
import "./Editor.css";
import ExtendedView from "../../components/ExtendedView/ExtendedView";

class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        <ExtendedView />
      </div>
    );
  }
}

export default Editor;
