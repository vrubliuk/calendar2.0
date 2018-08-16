import React from "react";
import "./Calendar.css";
import CompactView from "../../components/CompactView/CompactView";
import Details from "../../components/Details/Details";
import { connect } from "react-redux";

const Calendar = ({ hoveredDayId }) => {
  const details = hoveredDayId ? <Details /> : null;

  return (
    <div className="Calendar">
      <CompactView />
      {details}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hoveredDayId: state.temporary.hoveredDayId
  };
};

export default connect(mapStateToProps)(Calendar);
