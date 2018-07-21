import React from "react";
import "./Details.css";
import { connect } from "react-redux";

const Details = ({ hoveredDayId, database }) => {
  let confirmedDayOffDetails = null;
  let pendingDayOffDetails = null;
  let morningShiftDetails = null;
  let sharedInboxDetails = null;
  let auditDetails = null;
  let warningMessage = null;

  if (hoveredDayId in database) {
    confirmedDayOffDetails =
      "confirmedDayOff" in database[hoveredDayId] ? (
        <div className="Details__Item Details__Item-ConfirmedDayOff">
          <div>Confirmed day off:</div>
          <div>{database[hoveredDayId]["confirmedDayOff"]}</div>
        </div>
      ) : null;
    pendingDayOffDetails =
      "pendingDayOff" in database[hoveredDayId] ? (
        <div className="Details__Item Details__Item-PendingDayOff">
          <div>Pending day off:</div>
          <div>{database[hoveredDayId]["pendingDayOff"]}</div>
        </div>
      ) : null;
    morningShiftDetails =
      "morningShift" in database[hoveredDayId] ? (
        <div className="Details__Item Details__Item-MorningShift">
          <div>Morning shift:</div>
          <div>{database[hoveredDayId]["morningShift"]}</div>
        </div>
      ) : null;
    sharedInboxDetails =
      "sharedInbox" in database[hoveredDayId] ? (
        <div className="Details__Item Details__Item-SharedInbox">
          <div>Shared inbox:</div>
          <div>{database[hoveredDayId]["sharedInbox"]}</div>
        </div>
      ) : null;
    auditDetails =
      "audit" in database[hoveredDayId] ? (
        <div className="Details__Item Details__Item-Audit">
          <div>Audit:</div>
          <div>{database[hoveredDayId]["audit"]}</div>
        </div>
      ) : null;
  } else if (hoveredDayId) {
    warningMessage = <div className="Details__Item Details__Item-WarningMessage">Nothing has been scheduled for this day yet :(</div>;
  }

  return (
    <div className="Details">
    {/* {pendingDayOffDetails} */} 
      {confirmedDayOffDetails}
      {pendingDayOffDetails}
      {morningShiftDetails}
      {sharedInboxDetails}
      {auditDetails}
      {warningMessage}
    </div>
  );
};

const mapStateToProps = ({ hoveredDayId, database }) => {
  return {
    hoveredDayId,
    database
  };
};

export default connect(mapStateToProps)(Details);
