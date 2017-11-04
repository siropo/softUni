import React, { Component } from 'react';
import './focusDiv.css';

class FocusDiv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState(() => ({
            active: true
        }))
    }

    handleMouseLeave() {
        this.setState(() => ({
            active: false
        }))
    }

    render() {
        let currClass = 'focus-div';
        if (this.state.active) {
            currClass += ' active';
        }

        return (
            <div className={currClass}
                onMouseLeave={this.handleMouseLeave}
                onMouseEnter={this.handleMouseEnter}>
                <p>number: {this.props.num}</p>
                {this.props.children}
            </div>
        );
    }
}

export default FocusDiv;