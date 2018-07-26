import React from "react";
import "./Detail.css";
import {connect} from "react-redux"


const Detail = ({id, type, database, handleDataTransfer}) => {
  const detail = (id in database) && (type in database[id]) ? database[id][type] : '';
  
  
  const handleDragOver = (e) => {
    e.preventDefault();
  }
  const handleDrop = (e) => {
    e.preventDefault();
    const name = e.dataTransfer.getData("text");
    handleDataTransfer(id, type, name);
  }

  return <div className={`Detail ${detail ? 'Detail-Filled': ''}`} onDragOver={handleDragOver} onDrop={handleDrop}   >{detail}</div>;
};


const mapStateToProps = ({database}) => {
  return {
    database
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleDataTransfer: (id, type, name) => dispatch({ type: "UPDATE_DETAIL", payload: {id, type, name}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( Detail );

