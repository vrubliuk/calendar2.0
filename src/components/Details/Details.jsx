import React from "react";
import "./Details.css";
import { connect } from "react-redux";

const Details = ({ hoveredDayId, days }) => {
  let confirmedDayOffDetails = null;
  let pendingDayOffDetails = null;
  let morningShiftDetails = null;
  let sharedInboxDetails = null;
  let auditDetails = null;
  let warningMessage = null;

  if (hoveredDayId in days) {
    confirmedDayOffDetails =
      "confirmedDayOff" in days[hoveredDayId] ? (
        <div className="Details__Item Details__Item-ConfirmedDayOff">
          <div>Confirmed day off:</div>
          <div>{days[hoveredDayId]["confirmedDayOff"].join(', ')}</div>
        </div>
      ) : null;
    pendingDayOffDetails =
      "pendingDayOff" in days[hoveredDayId] ? (
        <div className="Details__Item Details__Item-PendingDayOff">
          <div>Pending day off:</div>
          <div>{days[hoveredDayId]["pendingDayOff"].join(', ')}</div>
        </div>
      ) : null;
    morningShiftDetails =
      "morningShift" in days[hoveredDayId] ? (
        <div className="Details__Item Details__Item-MorningShift">
          <div>Morning shift:</div>
          <div>{days[hoveredDayId]["morningShift"]}</div>
        </div>
      ) : null;
    sharedInboxDetails =
      "sharedInbox" in days[hoveredDayId] ? (
        <div className="Details__Item Details__Item-SharedInbox">
          <div>Shared inbox:</div>
          <div>{days[hoveredDayId]["sharedInbox"]}</div>
        </div>
      ) : null;
    auditDetails =
      "audit" in days[hoveredDayId] ? (
        <div className="Details__Item Details__Item-Audit">
          <div>Audit:</div>
          <div>{days[hoveredDayId]["audit"]}</div>
        </div>
      ) : null;
  } else if (hoveredDayId) {
    warningMessage = <div className="Details__Item Details__Item-WarningMessage">Nothing has been scheduled for this day yet</div>;
  }

  return (
    <div className="Details">
      {confirmedDayOffDetails}
      {pendingDayOffDetails}
      {morningShiftDetails}
      {sharedInboxDetails}
      {auditDetails}
      {warningMessage}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hoveredDayId: state.temporary.hoveredDayId,
    days: state.days.days
  };
};

export default connect(mapStateToProps)(Details);
