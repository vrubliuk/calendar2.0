import React, { Component } from "react";
import "./Editor.css";
import ExtendedView from "../../components/ExtendedView/ExtendedView";
import Basket from "../../components/Basket/Basket";
import Details from "../../components/Details/Details";

class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        <ExtendedView />
        <div className="Editor__Baskets">
          <Basket type="confirmedDayOff" />
          <Basket type="pendingDayOff" />
          <Basket type="schedule" />
          <Basket type="color" />
        </div>
        <Details />
      </div>
    );
  }
}

export default Editor;
