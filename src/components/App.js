import React, { Component } from 'react';
import '../css/App.css';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onClick = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className="App">
        <h1> To Do List</h1>
        <form >
          <input className="input" value={this.state.term} onChange={this.onChange} />
          <button className="button" onClick={this.onClick}>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
