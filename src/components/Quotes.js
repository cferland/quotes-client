import React, { Component } from 'react';
import axios from 'axios';

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios(`http://localhost:3000/speakers/${this.props.match.params.id}/quotes`);
      this.setState({
        quotes: response.data.quotes
      })
    } catch (e) {
      console.error(e);
    }
  }

  delete = async (e, quoteToDeleteId) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:3000/speakers/blah/quotes/${quoteToDeleteId}`);
      const quotes = this.state.quotes.filter(quote => (
        quote.id !== quoteToDeleteId
      ))

      this.setState({
        quotes
      })
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.quotes && this.state.quotes.map(quote => (
          <div key={quote.id}>
            <p>{new Date(quote.createdAt).toString()}</p>
            <p>{quote.text}</p>
            <button onClick={(e) => this.delete(e, quote.id)}>Delete</button>
          </div>
        ))}
      </div>
    )
  }
}

export default Quotes;