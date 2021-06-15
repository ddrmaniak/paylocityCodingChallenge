import React, { Component } from 'react';

export class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="">
                Cost Breakdown:
                <div className="ml-1 row">
                    Total Yearly Deduction: {this.props.yearlyDeduction ? this.props.yearlyDeduction.toFixed(2) : ""}
                </div>
                <div className="ml-1 row">
                    Approximate Total Deduction Per Paycheck: {this.props.yearlyDeduction ? this.props.perPaycheckDeduction.toFixed(2) : ""}
                </div>
                <div className="ml-1 row">
                    Approximate Total Net Pay Per Paycheck: {this.props.yearlyDeduction ? this.props.netPaycheckAmount.toFixed(2) : ""}
                </div>
            </div>
        );
    }
}
