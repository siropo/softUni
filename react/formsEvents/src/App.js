import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import FocusDiv from './components/focusDiv';
import Input from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <FocusDiv num="1" />
        <FocusDiv num="2" />
        <FocusDiv num="3" />
        <FocusDiv num="4" />
        <Button />
      </div>
    );
  }
}

export default App;
