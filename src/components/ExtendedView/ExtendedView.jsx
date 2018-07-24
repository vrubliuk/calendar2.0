import React from "react";
import "./ExtendedView.css";
import { connect } from "react-redux";
import Day from "../Day/Day";
import Placeholder from "../Placeholder/Placeholder";

const ExtendedView = ({ editorDate }) => {
  const year = editorDate.getFullYear();

  const headerMonthValue = ["Month"];
  const headerMonth = headerMonthValue.map((month, i) => (
    <div className="ExtendedView__Header__Item ExtendedView__Header__Month" key={i}>
      {month}
    </div>
  ));
  const headerDaysValue = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const headerDays = headerDaysValue.map((day, i) => (
    <div className="ExtendedView__Header__Item ExtendedView__Header__Days" key={i}>
      {day}
    </div>
  ));
  const headerDetailsValue = ["Morning shift", "Shared inbox", "Audit"];
  const headerDetails = headerDetailsValue.map((detail, i) => (
    <div className="ExtendedView__Header__Item ExtendedView__Header__Details" key={i}>
      {detail}
    </div>
  ));

  let months = [];
  let dayIds = [];
  let details = [];

  const firstDayIndexInWeek = new Date(year, 0, 1).getDay();
  const placeholdersQuantity = firstDayIndexInWeek ? firstDayIndexInWeek - 1 : 6;
  const placeholders = Array.from({ length: placeholdersQuantity }, (v, i) => <Placeholder key={i} type="Placeholder-Day-Small" />);

  for(let m = 0; m<12; m++) {
    const daysQuantity = new Date(year, m + 1, 0).getDate();
    for (let d = 1; d<=daysQuantity; d++) {
      const id = `${year}.${m + 1}.${d}`;
      dayIds.push(id);
    }
  }

  const days = dayIds.map((id, i)=> <Day key={i} id={id} type="Day-Small" />);

  console.log(days)


  
  return (
<div className="ExtendedView__Container">
    <div className="ExtendedView">
      <div className="ExtendedView__Header">
        <div className="ExtendedView__Header__Column">{headerMonth}</div>
        <div className="ExtendedView__Header__Column">{headerDays}</div>
        <div className="ExtendedView__Header__Column">{headerDetails}</div>
      </div>
      <div className="ExtendedView__Body">
        <div className="ExtendedView__Body__Column ExtendedView__Body__Column-Month">asd</div>
        <div className="ExtendedView__Body__Column ExtendedView__Body__Column-Days">
          {placeholders}
          {days}
         
        </div>
        <div className="ExtendedView__Body__Column ExtendedView__Body__Column-Details">ddd</div>
      </div>
    </div>
    </div>
  );
};

const mapStateToProps = ({ editorDate }) => {
  return {
    editorDate
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExtendedView);
