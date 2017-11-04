import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import FocusDiv from './components/FocusDiv';
import Input from './components/Form/Form';
import Converter from './components/Converter/Converter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Converter />
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
