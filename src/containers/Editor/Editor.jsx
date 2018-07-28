import React, { Component } from "react";
import "./Editor.css";
import ExtendedView from "../../components/ExtendedView/ExtendedView";
import Employees from "../../components/Employees/Employees.jsx";
import Details from "../../components/Details/Details";

class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        <ExtendedView />
        <div className="Editor__EmployeesBaskets">
          <Employees type="confirmedDayOff" />
          <Employees type="pendingDayOff" />
          <Employees type="schedule" />
        </div>
        <Details />
      </div>
    );
  }
}

export default Editor;
