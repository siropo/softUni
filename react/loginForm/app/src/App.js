import React, { Component } from 'react'
import './App.css'

import SingUpForm from './components/form/SingUpForm'
import LoginForm from './components/form/LoginForm'
import PokeIndex from './components/form/PokeIndex'

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      token: ''
    }

    this.autenticate = this.autenticate.bind(this);
  }

  componentDidMount() {
    this.setState({ token: localStorage.getItem('token') });
  }

  autenticate = (data) => {
    this.setState({ token: data.token, username: data.user.name });
    localStorage.setItem('token', data.token);
  }

  render() {
    if (this.state.token !== '' &&
      this.state.token !== 'undefined' &&
      typeof (localStorage.token) !== 'undefined') {
      return (
        <div>
          <PokeIndex />
        </div>
      )
    }
    return (
      <div>
        <SingUpForm />
        <LoginForm authFunc={this.autenticate} />
      </div>
    )
  }
}

export default App
