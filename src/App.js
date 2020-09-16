import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {

  msgStyle = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }
  btnStyle = {
    fontSize: "20pt",
    padding: "0px 10px"
  }

  constructor(props) {
    super();
    this.state = {
      counter: -1,
      msg: "Counter Start!!",
    };
    this.doAction = this.doAction.bind(this)
  }

  doAction(e) {
    this.setState((state) => ({
      counter: state.counter++,
      msg: "count: " + state.counter
    }))
  }


  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <p style={ this.msgStyle }>{this.state.msg}</p>
        <button style={ this.btnStyle } onClick={ this.doAction }>Click</button>
      </div>
    );
  }
}

export default App;
