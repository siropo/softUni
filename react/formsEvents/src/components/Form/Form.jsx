import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            bio: '',
            make: 'pesho'
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
                    <br />
                    <input name="password" type="password"
                        onChange={this.onChangeInput}
                        value={this.state.password} />
                    <br />
                    <textarea name="bio" id=""
                        onChange={this.onChangeInput}
                        value={this.state.bio}
                        cols="30" rows="10">
                    </textarea>
                    <br />
                    <select name="make"
                        value={this.state.make}
                        onChange={this.onChangeInput}
                        id="">
                        <option value="pesho">pesho</option>
                        <option value="gosho">gosho</option>
                    </select>
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default Form;