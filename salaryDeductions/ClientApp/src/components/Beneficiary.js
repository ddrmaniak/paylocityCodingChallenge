import React, { Component } from 'react';

export class Beneficiary extends Component {
  constructor(props) {
    super(props);
    this.count = props.count;
    this.change = props.changeCallback;
    this.state = { firstnam: props.firstname, lastname: props.lastname };
    this.changeText = this.changeText.bind(this);
  }
  changeText(event) {
    this.change(this.count, event.target.name.split('-')[0], event.target.value);
  };
  render() {
    return (
      <div className="container row">
        <div className="border mr-auto p-3">
          <label className="row mb-0 ml-1">First Name</label><input className="row ml-1 mr-1 mb-1 mt-0" type="text" name={"firstname-" + this.count} onChange={this.changeText} />
          <label className="row mb-0 ml-1">Last Name</label><input className="row ml-1 mr-1 mb-1 mt-0" type="text" name={"lastname-" + this.count} onChange={this.changeText} />
        </div>
      </div>
    );
  }
}
