import React from "react";
import "./Day.css";
import { connect } from "react-redux";
import todayIconPath from "../../assets/today.png";
import Remover from "../Remover/Remover.jsx";
import * as actionTypes from "../../store/actions"

const Day = ({ id, type, database, draggedType, handleHover, handleDataTransfer }) => {
  const year = id.split(".")[0];
  const month = +id.split(".")[1] - 1;
  const day = id.split(".")[2];
  const dayIndexInWeek = new Date(year, month, day).getDay();
  const dayType = dayIndexInWeek === 0 || dayIndexInWeek === 6 ? "Day-Weekend" : "Day-Working";
  const todayId = `${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`;
  const isToday = id === todayId;
  const confirmedDayOffExists = id in database && "confirmedDayOff" in database[id];
  const pendingDayOffExists = id in database && "pendingDayOff" in database[id];

  const todayIndicatorIconAdditionalClass = confirmedDayOffExists || pendingDayOffExists ? "Day__TodayIndicator__Icon-Hidden" : null;
  const removerType = !isToday ? "day" : "today";

  const todayIndicator = isToday ? (
    <div className="Day__TodayIndicator">
      {day}
      <img className={todayIndicatorIconAdditionalClass} src={todayIconPath} alt="Today" />
    </div>
  ) : null;
  const confirmedDayOffIndicator = confirmedDayOffExists ? <div className="Day__DayOffIndicator Day__ConfirmedDayOffIndicator" /> : null;
  const pendingDayOffIndicator = pendingDayOffExists ? <div className="Day__DayOffIndicator Day__PendingDayOffIndicator" /> : null;
  const remover = (confirmedDayOffExists || pendingDayOffExists) && type === "Day-Small" ? <Remover type={removerType} id={id} /> : null;

  const onMouseOver = dayType === "Day-Working" ? handleHover.bind(this, id) : null;
  const onMouseOut = dayType === "Day-Working" ? handleHover.bind(this, null) : null;
  let handleDragOver = null;
  let handleDrop = null;
  if (draggedType === "confirmedDayOff" || draggedType === "pendingDayOff") {
    handleDragOver = e => {
      e.preventDefault();
    };
    handleDrop = e => {
      const data = JSON.parse(e.dataTransfer.getData("text"));
      handleDataTransfer(id, data.type, data.name);
    };
  }

  return (
    <div className={`${type} ${dayType}`} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onDragOver={handleDragOver} onDrop={handleDrop}>
      {day}
      {todayIndicator}
      {confirmedDayOffIndicator}
      {pendingDayOffIndicator}
      {remover}
      <div className="Day__Pointer" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    database: state.days.database,
    draggedType: state.temporary.draggedType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleHover: id => dispatch({ type: actionTypes.HOVER_DAY, id }),
    handleDataTransfer: (id, type, name) => dispatch({ type: actionTypes.UPDATE_DAYOFF, payload: { id, type, name } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);
