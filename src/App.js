import React, { Component } from "react";
import Person from './components/Person'

export default class App extends Component {
  state = {
    name: 'Alex',
    age: 23
  };

  ShowAlert = (name, age) => {
    alert(`My name is ${name}, my age is ${age}`)
  }

  GetYearOlder = () => {
    this.setState({
      age: this.state.age + 1
    })
  }


  render() {
    let {name, age} = this.state
    return (
        <Person name={name} age={age} showAlert={this.ShowAlert} getYearOlder={this.GetYearOlder} />
    )
  }
}
