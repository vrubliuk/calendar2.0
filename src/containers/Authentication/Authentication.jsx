import React, { Component } from "react";
import "./Authentication.css";

class Authentication extends Component {
  state = {
    email: "",
    password: "",
    error: false
  };

  handleInput = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  showError = () => {
    this.setState({
      error: true
    });
    setTimeout(() => {
      this.setState({
        error: false
      });
    }, 2000);
  };

  render() {
    const errorMessage = this.state.error ? <div className="Authentication__Error">Incorrect email address or password</div> : null;
    return (
      <div className="Authentication__Wrapper">
        <div className="Authentication">
          <div className="Authentication__Header">Log in to Calendar</div>
          <form className="Authentication__Main">
            <div className="Authentication__Label">Email address</div>
            <input className="Authentication__Input" type="email" required value={this.state.email} onChange={e => this.handleInput(e, "email")} />
            <div className="Authentication__Label">Password</div>
            <input className="Authentication__Input" type="password" required value={this.state.password} onChange={e => this.handleInput(e, "password")} />
            <br />
            <button className="Authentication__Button" type="submit" onClick={this.showError}>
              Log in
            </button>
          </form>
          {errorMessage}
        </div>
      </div>
    );
  }
}

export default Authentication;
