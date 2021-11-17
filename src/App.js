import { Component } from 'react';
import "./App.css";
import Display from './components/Display';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousValue: "",
      result: "",
      operation: "",
    }
  }
  
  addUserInput = (event) => {
  this.setState({
    input: this.state.input + event.target.value
    })
  }
  

  clearButton = () => {
    if (this.state.input === "") {
      this.setState({
        input: "",
        previousValue: "",
        operation: "",
        result: "",
      });
    } else {
      this.setState({ input: "" });
    }
  };


addOperation = (event) => {
  if (event.target.value.includes("add")){
  this.setState({
    previousValue: this.state.input,
    input: "",
    result: Number(this.state.input) + Number(this.state.previousValue),
    operation: "add",
    })
  } else if (event.target.value.includes("equal")) {
    this.setState({
      input: Number(this.state.previousValue) + Number(this.state.input),
    })
  }
}

subtractOperation = (event) => {
  if (event.target.value === "subtract"){
  this.setState({
    previousValue: this.state.input,
    input: "",
    result: Number(this.state.previousValue) - Number(this.state.input), 
    operation: "subtract",
    })
} 
}

divideOperation = (event) => {
  if (event.target.value.includes("divide")){
  this.setState({
    previousValue: this.state.input,
    input: "",
    result: Number(this.state.previousValue) / Number(this.state.input),
    operation: "divide"
    })
  }
}


multiplyOperation = (event) => {
  if (event.target.value.includes("multiply")){
  this.setState({
    previousValue: this.state.input,
    input: "",
    result: Number(this.state.previousValue) * Number(this.state.input),
    operation: "multiply"
    })
  }
}


equalOperator = (event) => {
  if (this.state.operation === "add") {
    this.setState({
        previousValue: this.state.input,
        input: "",
        result: Number(this.state.input) + Number(this.state.previousValue),
        operation: "add",
    })
  } 

  if (this.state.operation === "subtract") {
    this.setState({
        previousValue: this.state.input,
        input: "",
        result: Number(this.state.previousValue) - Number(this.state.input),
    })
  }

  if (this.state.operation === "divide") {
    this.setState({
      previousValue: this.state.input,
      input: "",
      result: Number(this.state.previousValue) / Number(this.state.input),
      operation: "divide"
    })
  
  } 

  if (this.state.operation === "multiply"){
    this.setState({
      previousValue: this.state.input,
      input: "",
      result: Number(this.state.previousValue) * Number(this.state.input),
      operation: "multiply"
      })
    }
}



render() {
  console.log(this.state) 
  console.log(this.state.previousValue)
  return (
  <div className="app">
      <div className="container">

        <Display input={this.state.input} result={this.state.result}/>

        <div className="row">
          <button value="7" onClick={this.addUserInput}>7</button>
          <button value="8" onClick={this.addUserInput}>8</button>
          <button value="9" onClick={this.addUserInput}>9</button>
          <button className="operation" value="divide" onClick={(e) => this.divideOperation(e)}>/</button>
        </div>
        <div className="row">
          <button value="4" onClick={this.addUserInput}>4</button>
          <button value="5" onClick={this.addUserInput}>5</button>
          <button value="6" onClick={this.addUserInput}>6</button>
          <button className="operation" value="multiply" onClick={(e) => this.multiplyOperation(e)}>*</button>
        </div>
        <div className="row">
          <button value="1" onClick={this.addUserInput}>1</button>
          <button value="2" onClick={this.addUserInput}>2</button>
          <button value="3" onClick={this.addUserInput}>3</button>
          <button className="operation" value="add" onClick={(e) => this.addOperation(e)}>+</button>

        </div>
        <div className="row">
          <button value="." onClick={this.addUserInput}>.</button>
          <button value="0" onClick={this.addUserInput}>0</button>
          <button value="equal" onClick={(e) => this.equalOperator(e)}>=</button>
          <button className="operation" value="subtract" onClick={(e) => this.subtractOperation(e)}>-</button>
        </div>
        <div className="row">
      <button onClick={() => this.clearButton()}>AC</button>
        </div>
      </div>
  </div>
    );
  }
}

export default App;
