import React from "react";
import "./Editor.css";
import ExtendedView from "../../components/ExtendedView/ExtendedView";
import Basket from "../../components/Basket/Basket";
import Details from "../../components/Details/Details";
import { connect } from "react-redux";

const Editor = ({ chosenMondays }) => {
  const baskets = chosenMondays.length ? (
    <Basket type="color" />
  ) : (
    <React.Fragment>
      <Basket type="confirmedDayOff" />
      <Basket type="pendingDayOff" />
      <Basket type="schedule" />
    </React.Fragment>
  );

  return (
    <div className="Editor">
      <ExtendedView />
      <div className="Editor__Baskets">{baskets}</div>
      <Details />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    chosenMondays: state.temporary.chosenMondays
  };
};

export default connect(mapStateToProps)(Editor);
