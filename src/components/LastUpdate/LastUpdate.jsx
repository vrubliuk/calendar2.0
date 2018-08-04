import React, { Component } from "react";
import "./LastUpdate.css";
import { connect } from "react-redux";

class LastUpdate extends Component {
  state = {
    timeDifference: ""
  };

  updateTimeDifference = () => {
    const t = new Date().getTime() - this.props.lastUpdate; // time difference in miliseconds
    let timeDifference = "";
    let number = null;
    switch (true) {
      case t < 60000:
        timeDifference = `less than a minute ago`;
        break;
      case t < 3600000:
        number = Math.floor(t / 60000);
        timeDifference = `${number} ${number === 1 ? "minute" : "minutes"} ago`;
        break;
      case t < 86400000:
        number = Math.floor(t / 3600000);
        timeDifference = `${number} ${number === 1 ? "hour" : "hours"} ago`;
        break;
      case t >= 86400000:
        number = Math.floor(t / 86400000);
        timeDifference = `${number} ${number === 1 ? "day" : "days"} ago`;
        break;
      default:
        break;
    }

    this.setState({
      timeDifference
    });
  };

  componentDidMount() {
    this.updateTimeDifference();
    setInterval(this.updateTimeDifference, 60000); // update once per minute
  }
  render() {
    return <div className="LastUpdate">Last update: {this.state.timeDifference}</div>;
  }
}

const mapStateToProps = ({ lastUpdate }) => {
  return {
    lastUpdate
  };
};

export default connect(mapStateToProps)(LastUpdate);
