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
      showingResults: false,
      results: []
    };
    this.addCovered = this.addCovered.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.deductionsPreviewData = this.deductionsPreviewData.bind(this);
  }
  
  async deductionsPreviewData() {
    const requestOptions = {
      method: 'POST',
      headers: { Accept: 'application/json',
      'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.beneficiaries)
    };
    const response = await fetch('deduction', requestOptions);
    const data = await response.json();
    this.setState({ results: data });
  }
  
  componentDidMount() {
    this.addCovered();
  }

  addCovered() {
    this.setState({ beneficiaries: [...this.state.beneficiaries, { firstname: "", lastname: "", key: this.state.dependentCount, isPrimary: this.state.dependentCount===0 }] });
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
          <button id="calculate" onClick={event => this.deductionsPreviewData()}>Calculate</button>
        </div>
        <form id="beneficiaries" action="" className="col-3">{this.state.beneficiaries.map((beneficiary) =>
          <div>
            <label>{beneficiary.isPrimary ? "Primary Insured" : "Dependent " + beneficiary.key}</label>
            <Beneficiary count={beneficiary.key} changeCallback={this.changeInputValue} key={beneficiary.key} />
          </div>

        )}</form>
        <div id="results" hidden={this.state.showingResults} className="col-7">
          <Results yearlyDeduction={this.state.results.yearlyDeduction}
        perPaycheckDeduction={this.state.results.perPaycheckDeduction}
        netPaycheckAmount={this.state.results.netPaycheckAmount} /></div>
      </div>
    );
  }
}

