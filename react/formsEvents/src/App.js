import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import FocusDiv from './components/FocusDiv';
import Input from './components/Form/Form';
import Converter from './components/Converter/Converter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: true
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.value ? <Converter /> : 'Hide'}

        <Input />
        {[1, 2, 3, 4].map((n, i) => {
          return <FocusDiv key={i} num={n}>
            <p>Hello from children {n}</p>
          </FocusDiv>
        })}
        <Button />
      </div>
    );
  }
}

export default App;
