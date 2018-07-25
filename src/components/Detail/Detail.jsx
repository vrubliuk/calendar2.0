import React from "react";
import "./Detail.css";

const Detail = ({id, type}) => {
  return <div className="Detail">{id}-{type}</div>;
};

export default Detail;

