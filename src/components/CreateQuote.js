import React, { Component } from 'react';
import axios from 'axios';

export default class CreateQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    }) 
  }

  submitQuote = async (e) => {
    e.preventDefault();

    try {
      const newQuote = axios.post(`http://localhost:3000/speakers/${this.props.match.params.id}/quotes`, { text: this.state.text });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <form onSubmit={this.submitQuote}>
        <input type="textarea" name="text" value={this.state.text} onChange={this.handleChange} placeholder="Enter a quote" />
        <input type="submit" />
      </form>
    )
  }
}