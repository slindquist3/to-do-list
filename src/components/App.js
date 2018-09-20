import React, { Component } from 'react';
import '../css/App.css';
import List from './List';
import Form from './Form';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

      this.setState({
        items: [...this.state.items, this.state.term],
        //adds the term to the array that List items needs to print

        term: ''
        //makes the input value blank after the value has been stored in the List array
      });
  }

  render() {
    return (
      <div className="App">
        <h1> To Do List</h1>
        <Form onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit} term={this.state.term} />
        <List items={this.state.items} />
      </div>
    );
  }
}
