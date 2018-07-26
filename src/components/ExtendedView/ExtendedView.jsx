import React from "react";
import "./ExtendedView.css";
import { connect } from "react-redux";
import Day from "../Day/Day";
import Placeholder from "../Placeholder/Placeholder";
import Detail from "../Detail/Detail";
import MonthName from "../MonthName/MonthName";

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

  const firstDayIndexInWeek = new Date(year, 0, 1).getDay();
  const placeholdersQuantity = firstDayIndexInWeek ? firstDayIndexInWeek - 1 : 6;

  let dayIds = [];
  let monthNamesAndIndexes = [];

  const daysQuantityPreviousYearLastMonth = new Date(year, 1, 0).getDate();
  for (let day = placeholdersQuantity; day > 0; day--) {
    const id = `${year - 1}.12.${daysQuantityPreviousYearLastMonth - day}`;
    dayIds.push(id);
  }

  for (let month = 0; month < 12; month++) {
    const daysQuantity = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysQuantity; day++) {
      const id = `${year}.${month + 1}.${day}`;
      dayIds.push(id);
      if (day === 1) {
        const monthName = new Date(year, month, day).toLocaleString("en-US", { month: "long" });
        // console.log(dayIds.length % 7)
        const index = dayIds.length % 7 ? Math.floor(dayIds.length / 7) : dayIds.length / 7 - 1;
        monthNamesAndIndexes.push({
          month: monthName,
          index: index
        });
      }
    }
  }

  const monthNamesLength = monthNamesAndIndexes[monthNamesAndIndexes.length - 1].index;
  const monthNames = [];
  monthNames.length = monthNamesLength;
  monthNames.fill("");
  monthNamesAndIndexes.forEach(v => {
    monthNames[v.index] = v.month;
  });

  const months = monthNames.map((monthName, i) => {
    return monthName !== "" ? <MonthName name={monthName} key={i} /> : <Placeholder type="Placeholder-MonthName" key={i} />;
  });

  const days = dayIds.map((id, i) => {
    return id.split(".")[0] < year ? <Placeholder key={i} type="Placeholder-Day-Small" /> : <Day key={i} id={id} type="Day-Small" />;
  });

  let mondayIds = [];
  for (let monday = 0; monday < dayIds.length; monday += 7) {
    mondayIds.push(dayIds[monday]);
  }

  let details = mondayIds.map((mondayId, i) => {
    return (
      <React.Fragment key={i}>
        <Detail id={mondayId} type="morningShift" />
        <Detail id={mondayId} type="sharedInbox" />
        <Detail id={mondayId} type="audit" />
      </React.Fragment>
    );
  });

  return (
    <div className="ExtendedView__Container">
      <div className="ExtendedView">
        <div className="ExtendedView__Header">
          <div className="ExtendedView__Header__Column">{headerMonth}</div>
          <div className="ExtendedView__Header__Column">{headerDays}</div>
          <div className="ExtendedView__Header__Column">{headerDetails}</div>
        </div>
        <div className="ExtendedView__Body">
          <div className="ExtendedView__Body__Column ExtendedView__Body__Column-Month">{months}</div>
          <div className="ExtendedView__Body__Column ExtendedView__Body__Column-Days">{days}</div>
          <div className="ExtendedView__Body__Column ExtendedView__Body__Column-Details">{details}</div>
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
