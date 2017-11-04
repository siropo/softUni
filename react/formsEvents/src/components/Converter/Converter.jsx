import React, { Component } from 'react';
import './converter.css';
import CurrencyDisplay from './CurrencyDisplay';

const convertTable = {
    eur: 1,
    usd: 1.16
}

const convertUnits = (value, from, to) => {
    return value / convertTable[from] * convertTable[to];
}

class Converter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eur: 0,
            usd: 0
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const name = e.target.name;
        let value = Number(e.target.value)
        if (Number.isNaN(value)) {
            return;
        }

        this.setState({ [name]: value });
        this.setState((prevState) => {
            const usd = convertUnits(value, name, 'usd');
            return {
                usd: usd
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {

        return (
            <div className="converter">
                <form action="" onSubmit={this.onSubmit}>
                    <CurrencyDisplay
                        onChange={this.onChange}
                        value={this.state.eur}
                        name="eur" />
                    <br />
                    <input
                        name="eur"
                        type="submit"
                        value="Convert" />
                    <br />
                    USD:
                    <input
                        value={this.state.usd}
                        type="number" disabled="true" />
                </form>
                <br />
            </div>
        );
    }
}

export default Converter;