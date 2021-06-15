import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class SysConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            defaultPaycheckAmount: 0.0,
            defaultPaycheckPerYear: 0,
            discountLetter: '',
            discountAmountCoefficient: 0.0,
            primaryDeductionAmount: 0.0,
            dependentDeductionAmount: 0.0,
        };
        this.submitData = this.submitData.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const response = await fetch('sysParameters');
        const data = await response.json();
        this.setState(data);
    }
    async submitData(event) {
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        };
        const response = await fetch('SysParameters', requestOptions);
        const data = await response.json();
        this.setState(data);
    }

    render() {
        return (
            <Container className="row">
                <div className="border mr-auto p-3">
                <form>
                    <label className="row mb-0 ml-1">DefaultPaycheckAmount</label>
                    <input className="row ml-1 mr-1 mb-1 mt-0" type="text" name="defaultPaycheckAmount" value={this.state.defaultPaycheckAmount} onChange={e => this.setState({defaultPaycheckAmount: e.target.value})} />
                    <label className="row mb-0 ml-1">DefaultPaycheckPerYear</label>
                    <input className="row ml-1 mr-1 mb-1 mt-0" type="text" name="defaultPaycheckPerYear" value={this.state.defaultPaycheckPerYear} onChange={e => this.setState({ defaultPaycheckPerYear: e.target.value })} />
                    <label className="row mb-0 ml-1">DiscountLetter</label>
                    <input className="row ml-1 mr-1 mb-1 mt-0" type="text" name="discountLetter" value={this.state.discountLetter} onChange={e => this.setState({ discountLetter: e.target.value })} />
                    <label className="row mb-0 ml-1">DiscountAmountCoefficient</label>
                    <input className="row ml-1 mr-1 mb-1 mt-0" type="text" name="discountAmountCoefficient" value={this.state.discountAmountCoefficient} onChange={e => this.setState({ discountAmountCoefficient: e.target.value })} />
                    <label className="row mb-0 ml-1">PrimaryDeductionAmount</label>
                    <input className="row ml-1 mr-1 mb-1 mt-0" type="text" name="primaryDeductionAmount" value={this.state.primaryDeductionAmount} onChange={e => this.setState({ primaryDeductionAmount: e.target.value })} />
                    <label className="row mb-0 ml-1">DependentDeductionAmount</label>
                    <input className="row ml-1 mr-1 mb-1 mt-0" type="text" name="dependentDeductionAmount" value={this.state.dependentDeductionAmount} onChange={e => this.setState({ dependentDeductionAmount: e.target.value })} />
                </form>
                <button onClick={this.submitData}>Submit</button>
                </div>
            </Container>
        );
}
}
