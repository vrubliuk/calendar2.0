import React from "react";
import Calendar from "../Calendar/Calendar.jsx";
import Editor from "../Editor/Editor.jsx";
import Employees from "../Employees/Employees";
import Authentication from "../Authentication/Authentication.jsx";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// class Main extends Component {
//   render() {
//     return (
//       <Switch>
//         <Route exact path="/" component={Calendar} />
//         <Route exact path="/editor" render={() => (this.props.authorized ? <Editor /> : <Redirect to="/authentication" />)} />
//         <Route exact path="/employees" render={() => (this.props.authorized ? <Employees /> : <Redirect to="/authentication" />)} />
//         <Route exact path="/authentication" component={Authentication} />
//         <Redirect to="/" />
//       </Switch>
//     );
//   }
// }

const Main = ({authorized}) => {
  return (
    <Switch>
      <Route exact path="/" component={Calendar} />
      <Route exact path="/editor" render={() => (authorized ? <Editor /> : <Redirect to="/authentication" />)} />
      <Route exact path="/employees" render={() => (authorized ? <Employees /> : <Redirect to="/authentication" />)} />
      <Route exact path="/authentication" component={Authentication} />
      <Redirect to="/" />
    </Switch>
  );
}


const mapStateToProps = state => {
  return {
    authorized: state.authorization.authorized
  };
};

export default withRouter(
  connect(
    mapStateToProps
  )(Main)
);


