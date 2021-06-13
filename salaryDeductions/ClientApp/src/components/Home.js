import React, { Component } from 'react';
import { Beneficiary } from './Beneficiary';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      dependentCount: 0,
      beneficiaries: [],
      shoringResults: false
    };
    this.addCovered = this.addCovered.bind(this);
    this.runRules = this.runRules.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
  }

  componentDidMount() {
    this.addCovered();
  }

  addCovered() {
    this.state.beneficiaries.push(<div><Beneficiary count={this.state.dependentCount} changeCallback={this.changeInputValue} /></div>);
    this.setState({ dependentCount: this.state.dependentCount + 1 });
  }

  changeInputValue(id, firstOrLast, newVal) {
    let values = [...this.state.beneficiaries.map((item, index) => {
      if(index == id){
        if(firstOrLast === "firstname"){
          return {...item, firstname: newVal};
        }
        return {...item, lastname: newVal};
        //return Object.assign(item, firstOrLast === "firstname" ? { firstname: newVal } : { lastname: newVal });
      }
      return item;
    })];
    //values[id] = Object.assign(values[id], firstOrLast === "firstname" ? { firstname: newVal } : { lastname: newVal });
    this.setState({ beneficiaries: values });
  }

  runRules(firstName, lastName, isPrimary) {
    let totalDed = 0;
    if (isPrimary) totalDed += 1000;
    else totalDed += 500;
    if (firstName && firstName[0] == 'A') totalDed *= .9;
    return totalDed;
  }

  render() {
    return (
      <div><form id="beneficiaries" action="" className=" d-inline-flex">{this.state.beneficiaries}</form>
        <button id="add-dependent-button" onClick={this.addCovered}>Add Dependent</button>
        <button id="calculate" onClick={event => this.setState({showingResults: !this.state.showingResults})}>Calculate</button>
        <div id="results" hidden={this.state.showingResults}>
          {this.state.beneficiaries.map((item, index) => <div>{item.firstname} {item.lastname}: {(this.runRules(item.firstname, item.lastname, index == 0)/12.0).toFixed(2)}</div>)}
        </div>
      </div>
    );
  }
}

