import React from "react";
import "./Detail.css";
import {connect} from "react-redux"


const Detail = ({id, type, database, colors, handleDataTransfer}) => {
  const info = (id in database) && (type in database[id]) ? database[id][type] : '';
  const color = info && ('colors' in database[id]) && (type in database[id].colors) ? database[id].colors[type] : null;

  const style = color ? {
    background: colors[color].light,
    border: `2px solid ${colors[color].dark}`
  } : null;
  
  const handleDragOver = (e) => {
    e.preventDefault();
  }
  const handleDrop = (e) => {
    e.preventDefault();
    const name = e.dataTransfer.getData("text");
    handleDataTransfer(id, type, name);
  }

  return <div className={`Detail ${info ? 'Detail-Filled': ''}`} style={style} onDragOver={handleDragOver} onDrop={handleDrop}   >{info}</div>;
};


const mapStateToProps = ({database, colors}) => {
  return {
    database, colors
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleDataTransfer: (id, type, name) => dispatch({ type: "UPDATE_DETAIL", payload: {id, type, name}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( Detail );

