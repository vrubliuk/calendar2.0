import React, { Component } from "react";
import "./Authentication.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";

class Authentication extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  handleLogIn = e => {
    if (!e.target.checkValidity()) return;
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  };

  componentDidUpdate() {
    if (this.props.idToken) this.props.history.goBack()
  }
 
  render() {
    const errorMessage = this.props.error ? <div className="Authentication__Error">Incorrect email address or password</div> : null;
    return (
      <div className="Authentication__Wrapper">
        <div className="Authentication">
          <div className="Authentication__Header">Log in to Calendar</div>
          <form className="Authentication__Main" onSubmit={this.handleLogIn}>
            <div className="Authentication__Label">Email address</div>
            <input className="Authentication__Input" type="email" required value={this.state.email} onChange={e => this.handleInput(e, "email")} />
            <div className="Authentication__Label">Password</div>
            <input className="Authentication__Input" type="password" required value={this.state.password} onChange={e => this.handleInput(e, "password")} />
            <br />
            <button className="Authentication__Button" type="submit">
              Log in
            </button>
          </form>
          {errorMessage}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.authorization.error,
    idToken: state.authorization.idToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: (email, password) => dispatch(actionCreators.logIn(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
