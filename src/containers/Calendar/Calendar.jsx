import React, { Component } from "react";
import "./Calendar.css";
import CompactView from "../../components/CompactView/CompactView";

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <CompactView />
      </div>
    );
  }
}

export default Calendar;
