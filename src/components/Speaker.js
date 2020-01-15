import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Speakers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speakers: null
    }
  }

  async componentDidMount() {
    try {
      const response = await axios('http://localhost:3000/speakers');
      this.setState({
        speakers: response.data.speakers
      })
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.speakers && this.state.speakers.map(speaker => (
          <div key={speaker.id}>
            <p>{speaker.name}</p>
            <img src={speaker.image_url} alt="dude" />
            <Link to={`/speakers/${speaker.id}`}>See Quotes</Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Speakers;