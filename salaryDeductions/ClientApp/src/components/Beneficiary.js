import React, { Component } from 'react';

export class Beneficiary extends Component {
  constructor(props) {
    super(props);
    this.count = props.count;
    this.change = props.changeCallback;
    this.state = {firstnam: props.firstname, lastname: props.lastname};
    this.changeText = this.changeText.bind(this);
  }
  changeText (event){
    this.change(this.count, event.target.name.split('-')[0],  event.target.value);
  };
  render() {
    return (
      <div className="container border pt-2">
        <label>First Name<input type="text" name={"firstname-" + this.count} onChange={this.changeText}></input></label>
        <br/>
        <label>Last Name<input type="text" name={"lastname-" + this.count} onChange={this.changeText}></input></label>
      </div>
    );
  }
}
