import React from 'react'
import "./Settings__Employees.css"

import {connect} from "react-redux"

const Settings__Employees = ({employees}) => {
  return (
    <div className="Settings__Employees">
dd
    </div>
  )
}

const mapStateToProps = ({employees}) => {
  return {
    employees
  }
}

export default connect(mapStateToProps)(Settings__Employees);