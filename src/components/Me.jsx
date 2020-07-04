import React, { Component } from "react";
import Name from './Name'
import Age from './Age'
import ShowAlert from './ShowAlert'
import GetYearOlder from './GetYearOlder'

export default class Me extends Component {
  render() {
    let { name, age, showAlert, getYearOlder } = this.props
    return (
       <div className='wrapper'>
            <Name name={name} />
            <Age age={age} />
            <ShowAlert name={name} age={age} showAlert={showAlert} />
            <GetYearOlder age={age} getYearOlder={getYearOlder} />
       </div>
    )
  }
}