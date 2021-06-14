import React, { Component } from 'react';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.runRules = this.runRules.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
  }
  runRules(firstName, lastName, isPrimary) {
    let totalDed = 0;
    if (isPrimary) totalDed += 1000;
    else totalDed += 500;
    if (firstName && firstName[0] === 'A') totalDed *= .9;
    return totalDed;
  }

  calcTotal() {
    return this.props.beneficiaries.reduce((cum, curr, index) => cum += this.runRules(curr.firstname, curr.lastname, index == 0), 0);
  }

  render() {
    return (
      <div className="">
        Cost Breakdown:
        <div className="ml-1 row">
          Total Yearly Deduction: {this.calcTotal()}
        </div>
        <div className="ml-1 row">
          Approximate Total Deduction Per Paycheck: {(this.calcTotal() / 26.0).toFixed(2)}
        </div>
        <div className="ml-1 row">
          Approximate Total Net Pay Per Paycheck: {2000 - (this.calcTotal() / 26.0).toFixed(2)}
        </div>
      </div>
    );
  }
}
