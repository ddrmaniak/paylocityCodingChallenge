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
      results: [],
      paycheckAmount: 0.0,
      paycheckCount: 0
    };
    this.addCovered = this.addCovered.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.deductionsPreviewData = this.deductionsPreviewData.bind(this);
    this.changePaycheckCount = this.changePaycheckCount.bind(this);
    this.changePaycheckAmount = this.changePaycheckAmount.bind(this);
  }

  async getDefaultPaycheckValues() {
    const response = await fetch('sysParameters');
    const data = await response.json();
    this.setState({ paycheckAmount: data.defaultPaycheckAmount, paycheckCount: data.defaultPaycheckPerYear});
  }

  async deductionsPreviewData() {
    const requestOptions = {
      method: 'POST',
      headers: { Accept: 'application/json',
      'Content-Type': 'application/json' },
      body: JSON.stringify({ beneficiaries: this.state.beneficiaries, paycheckAmount: this.state.paycheckAmount, paycheckCount: this.state.paycheckCount })
    };
    const response = await fetch('deduction', requestOptions);
    const data = await response.json();
    this.setState({ results: data });
  }
  
  componentDidMount() {
    this.addCovered();
    this.getDefaultPaycheckValues();
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

  changePaycheckCount(e) {
    this.setState({ paycheckCount: e.target.value});
  }

  changePaycheckAmount(e) {
    this.setState({ paycheckAmount: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-4 col-lg-3">
          <label className="row mb-0 ml-1">Number of paychecks per year</label><input className="row ml-1 mr-1 mb-1 mt-0" type="text" value={this.state.paycheckCount} onChange={this.changePaycheckCount} />
          <label className="row mb-0 ml-1">Paycheck Total</label><input className="row ml-1 mr-1 mb-1 mt-0" type="text" value={this.state.paycheckAmount} onChange={this.changePaycheckAmount} />
          <button id="add-dependent-button" onClick={this.addCovered}>Add Dependent</button>
          <button id="calculate" onClick={event => this.deductionsPreviewData()}>Calculate</button>
        </div>
        <form id="beneficiaries" action="" className="col-4 col-lg-3">{this.state.beneficiaries.map((beneficiary) =>
          <div>
            <label>{beneficiary.isPrimary ? "Primary Insured" : "Dependent " + beneficiary.key}</label>
            <Beneficiary count={beneficiary.key} changeCallback={this.changeInputValue} key={beneficiary.key} />
          </div>

        )}</form>
        <div id="results" hidden={this.state.showingResults} className="col-8 col-lg">
          <Results yearlyDeduction={this.state.results.yearlyDeduction}
        perPaycheckDeduction={this.state.results.perPaycheckDeduction}
        netPaycheckAmount={this.state.results.netPaycheckAmount} /></div>
      </div>
    );
  }
}

