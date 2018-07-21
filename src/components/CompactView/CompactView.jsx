import React from "react";
import "./CompactView.css";
import Placeholder from "../Placeholder/Placeholder";
import Day from "../Day/Day";
import { connect } from "react-redux";

const CompactView = ({ date }) => {
  const week = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const header = week.map((day, i) => <div className='CompactView__Header' key={i}>{day}</div>);
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayIndexInWeek = new Date(year, month, 1).getDay();
  const placeholdersQuantity = firstDayIndexInWeek ? firstDayIndexInWeek - 1 : 6;
  const placeholders = Array.from({ length: placeholdersQuantity }, (v, i) => <Placeholder key={i} />);
  const daysQuantity = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysQuantity }, (v, i) => <Day key={i} id={`${year}.${month + 1}.${i + 1}`} />);

  return (
    <div className="CompactView">
      {header}
      {placeholders}
      {days}
    </div>
  );
};

const mapStateToProps = ({ date }) => {
  return {
    date
  };
};

export default connect(mapStateToProps)(CompactView);
