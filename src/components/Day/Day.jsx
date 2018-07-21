import React from "react";
import "./Day.css";
import { connect } from "react-redux";
import todayIconPath from "../../assets/today.png";

const Day = ({ id, database, handleHover }) => {
  const year = id.split(".")[0];
  const month = +id.split(".")[1] - 1;
  const day = id.split(".")[2];
  const dayIndexInWeek = new Date(year, month, day).getDay();
  const dayType = dayIndexInWeek === 0 || dayIndexInWeek === 6 ? "Day-Weekend" : "Day-Working";
  const todayId = `${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`;
  const todayIndicator =
    id === todayId ? (
      <div className="Day__TodayIndicator">
        {day}
        <img src={todayIconPath} alt="Today" />
      </div>
    ) : null;
  const confirmedDayOffIndicator = id in database && "confirmedDayOff" in database[id] ? <div className="Day__DayOffIndicator Day__ConfirmedDayOffIndicator" /> : null;
  const pendingDayOffIndicator = id in database && "pendingDayOff" in database[id] ? <div className="Day__DayOffIndicator Day__PendingDayOffIndicator" /> : null;
  return (
    <div className={`Day ${dayType}`} onMouseOver={handleHover.bind(this, id)} onMouseOut={handleHover.bind(this, null)}>
      {day}
      {todayIndicator}
      {confirmedDayOffIndicator}
      {pendingDayOffIndicator}
      <div className="Day__Pointer" />
    </div>
  );
};

const mapStateToProps = ({ database }) => {
  return {
    database
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleHover: id => dispatch({ type: "HOVER_DAY", id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);
