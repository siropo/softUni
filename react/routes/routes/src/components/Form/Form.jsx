import React, { Component } from 'react';

let ManagedInput = {};
export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        ManagedInput = withHandler(Input, this.onChange);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.name)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                Name:
                <form action="" onSubmit={this.onSubmit}>
                    <ManagedInput
                        type="text"
                        name="name"
                        value={this.state.name}
                    />
                    Password:
                    <ManagedInput
                        type="text"
                        name="password"
                        value={this.state.password}
                    />
                    <input type="button" value="login" />
                </form>
            </div>
        )
    }
}

function withHandler(WrappedComponent, changeHandler, ...rest) {
    class ManagedInput extends Component {
        render() {
            return (
                <WrappedComponent
                    onChange={changeHandler}
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value} />
            )
        }
    }

    return ManagedInput;
}

function Input(props) {
    return (
        <input type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    )
}