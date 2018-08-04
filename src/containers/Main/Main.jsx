// import React, { Component } from "react";
import React from "react";
import Calendar from "../Calendar/Calendar.jsx";
import Editor from "../Editor/Editor.jsx";
import Employees from "../Employees/Employees";
import Authentication from "../Authentication/Authentication.jsx";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// class Main extends Component {
//   render() {
//     console.log(this.props.authorized)
//     const x = this.props.authorized

//     return (
//       <React.Fragment>
//         <Route exact path="/" component={Calendar} />
//         <Route exact path="/editor" render={() => x ? <Editor /> : <Redirect to="/authentication" />}/>
//         <Route exact path="/settings" render={() => x ? <Settings /> : <Redirect to="/authentication" />}/>
//         <Route exact path="/authentication" component={Authentication} />
//       </React.Fragment>
//     );
//   }
// }

const Main = ({ authorized }) => {
  return (
    
    <Switch>
      <Route exact path="/" component={Calendar} />
      <Route exact path="/editor" render={() => (authorized ? <Editor /> : <Redirect to="/authentication" />)} />
      <Route exact path="/employees" render={() => (authorized ? <Employees /> : <Redirect to="/authentication" />)} />
      <Route exact path="/authentication" component={Authentication} />
      <Redirect to="/" />
    </Switch>

  );
};

const mapStateToProps = ({ authorized }) => {
  return {
    authorized
  };
};

export default withRouter(connect(mapStateToProps)(Main));
