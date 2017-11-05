import React, { Component } from 'react'

import validationFunc from './../../utils/formValidator'
import Input from './formFields/Input'

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.submitLogin = this.submitLogin.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    submitLogin(e) {
        e.preventDefault();
        let payload = {
            email: this.state.email,
            password: this.state.password
        }

        this.loginUser(payload);
    }

    loginUser(payload) {
        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                return res.json()
            })
            .then(d => {
                console.log(d);
                this.props.authFunc(d);
            })
    }

    render() {
        let validObj = validationFunc(
            this.state.email,
            this.state.email,
            'k',
            this.state.password,
            this.state.password
        )

        return (
            <div>
                <fieldset>
                    <form action="" onSubmit={this.submitLogin}>
                        <h2>Sign in</h2>
                        <Input
                            type='text'
                            data='email'
                            name='Email'
                            func={e => {
                                this.setState({ email: e.target.value })
                            }}
                            valid={validObj.validMail}
                        />
                        <Input
                            type='password'
                            data='password'
                            name='Password'
                            func={e => {
                                this.setState({ password: e.target.value })
                            }}
                            valid={validObj.validPassword}
                        />
                        <input
                            style={({ "display": (validObj.validMail && validObj.validPassword) === true ? '' : 'none' })}
                            type='submit'
                            value='Login'
                        />
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default LoginForm;