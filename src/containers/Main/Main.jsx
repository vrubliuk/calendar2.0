import React from "react";
import Calendar from "../Calendar/Calendar.jsx";
import Editor from "../Editor/Editor.jsx";
import Employees from "../Employees/Employees";
import Authentication from "../Authentication/Authentication.jsx";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";

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

const Main = ({ idToken, previousRoute, setPreviousRoute }) => {
  return (
    <Switch>
      <Route exact path="/" component={Calendar} />
      <Route
        exact
        path="/editor"
        render={() => {
          if (idToken) {
            return <Editor />;
          } else {
            setPreviousRoute("/editor");
            return <Redirect to="/authentication" />;
          }
        }}
      />
      <Route
        exact
        path="/employees"
        render={() => {
          if (idToken) {
            return <Employees />;
          } else {
            setPreviousRoute("/employees");
            return <Redirect to="/authentication" />;
          }
        }}
      />
      <Route
        exact
        path="/authentication"
        render={() => {
          if (idToken) {
            return previousRoute ? <Redirect to={previousRoute} /> : <Redirect to="/" />;
          } else {
            return <Authentication />;
          }
        }}
      />
      <Redirect to="/" />
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    idToken: state.authorization.idToken,
    previousRoute: state.temporary.previousRoute
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setPreviousRoute: payload => dispatch(actionCreators.setPreviousRoute(payload))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
