import React, { Component } from "react";
import Me from './Me'

export default class Person extends Component {
  render() {
      let { age, name, showAlert, getYearOlder } = this.props
    return (
        <Me age={age} name={name} showAlert={showAlert} getYearOlder={getYearOlder} />
    )
  }
}