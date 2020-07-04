import React, { Component } from "react";

export default class Name extends Component {
  render() {
    let { age } = this.props
    return (
        <h2>{age}</h2>
    )
  }
}