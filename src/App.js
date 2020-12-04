import React, { Component } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      hugo: 0,
      timot: 0,
      dennis: 0,
      edet: 0,
      fredrik: 0,

    };
  }

  incrementHugoCount = () => {
    this.setState({
      hugo: this.state.hugo + 1
    });
  };

  decrementHugoCount = () => {
    this.setState({
      hugo: this.state.hugo - 1
    });
  };

  incrementDennisCount = () => {
    this.setState({
      dennis: this.state.dennis + 1
    });
  };

  decrementDennisCount = () => {
    this.setState({
      dennis: this.state.dennis - 1
    });
  };

  incrementTimotCount = () => {
    this.setState({
      timot: this.state.timot + 1
    });
  };

  decrementTimotCount = () => {
    this.setState({
      timot: this.state.timot - 1
    });
  };

  incrementEdetCount = () => {
    this.setState({
      edet: this.state.edet + 1
    });
  };

  decrementEdetCount = () => {
    this.setState({
      edet: this.state.edet - 1
    });
  };

  incrementFredrikCount = () => {
    this.setState({
      fredrik: this.state.fredrik + 1
    });
  };

  decrementFredrikCount = () => {
    this.setState({
      fredrik: this.state.fredrik - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="count">
            <h1>Hugo Count:</h1>
            <h1>{this.state.hugo}</h1>
            <div class="buttons">
              <Button title={"-"} action={this.decrementHugoCount}/>
              <Button title={"+"} action={this.incrementHugoCount}/>
            </div>
            
          </div>
          <div class="count">
            <h1> Dennis Count:</h1>
            <h1>{this.state.dennis}</h1>
            <div class="buttons">
              <Button title={"-"} action={this.decrementDennisCount}/>
              <Button title={"+"} action={this.incrementDennisCount}/>
            </div>
            
          </div>
          <div class="count">
            <h1>Timothy Count:</h1>
            <h1>{this.state.timot}</h1>
            <div class="buttons">
              <Button title={"-"} action={this.decrementTimotCount}/>
              <Button title={"+"} action={this.incrementTimotCount}/>
            </div>
            
          </div>
          <div class="count">
            <h1>Fredrik Count:</h1>
            <h1>{this.state.fredrik}</h1>
            <div class="buttons">
              <Button title={"-"} action={this.decrementFredrikCount}/>
              <Button title={"+"} action={this.incrementFredrikCount}/>
            </div>
            
          </div>
          <div class="count">
            <h1>Edet Count:</h1>
            <h1>{this.state.edet}</h1>
            <div class="buttons">
              <Button title={"-"} action={this.decrementEdetCount}/>
              <Button title={"+"} action={this.incrementEdetCount}/>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
