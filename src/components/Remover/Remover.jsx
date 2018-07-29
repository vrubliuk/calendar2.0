import React from "react";
import "./Remover.css"
import {connect} from "react-redux"


const Remover = ({colors}) => {
  return (
    <div className="ColorPicker">
      <div className="ColorPicker__Header">1</div>
      <div className="ColorPicker__Body">2</div>

      <div className="ColorPicker__Footer">3</div>
    </div>
  );
};



const mapStateToProps = ({colors}) => {
  return {
    colors
  }
}

export default connect(mapStateToProps)(ColorPicker);
