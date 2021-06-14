import React, { Component } from 'react';
import { Beneficiary } from './Beneficiary';
import { Results } from './Results';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      dependentCount: 0,
      beneficiaries: [],
      showingResults: false
    };
    this.addCovered = this.addCovered.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
  }

  componentDidMount() {
    this.addCovered();
  }

  addCovered() {
    this.setState({ beneficiaries: [...this.state.beneficiaries, { firstname: "", lastname: "", key: this.state.dependentCount }] });
    this.setState({ dependentCount: this.state.dependentCount + 1 });
  }

  changeInputValue(id, firstOrLast, newVal) {
    let values = [...this.state.beneficiaries.map((item, index) => {
      if (index === id) {
        if (firstOrLast === "firstname") {
          return { ...item, firstname: newVal };
        }
        return { ...item, lastname: newVal };
      }
      return item;
    })];
    this.setState({ beneficiaries: values });
  }

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <button id="add-dependent-button" onClick={this.addCovered}>Add Dependent</button>
          <button id="calculate" onClick={event => this.setState({ showingResults: !this.state.showingResults })}>Calculate</button>
        </div>
        <form id="beneficiaries" action="" className="col-3">{this.state.beneficiaries.map((beneficiary) =>
          <div>
            <label>{beneficiary.key == 0 ? "Primary Insured" : "Dependent " + beneficiary.key}</label>
            <Beneficiary count={beneficiary.key} changeCallback={this.changeInputValue} key={beneficiary.key} />
          </div>

        )}</form>
        <div id="results" hidden={this.state.showingResults} className="col-7"><Results beneficiaries={this.state.beneficiaries} /></div>
      </div>
    );
  }
}

