import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToogleOn: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isToogleOn: !prevState.isToogleOn
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToogleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default Button;