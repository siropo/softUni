import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        alert(this.state.name);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.onSubmit}>
                    input <input
                        onChange={this.onChangeInput}
                        type="text"
                        name="name"
                        value={this.state.name} />
                    <input name="password" type="password"
                        onChange={this.onChangeInput}
                        value={this.state.password} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default Form;