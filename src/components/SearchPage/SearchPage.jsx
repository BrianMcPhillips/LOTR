import React, { Component } from 'react';
import request from 'superagent';

export default class SearchPage extends Component {
  state ={
    characterState: {}
  }
  componentDidMount = async() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}` 
    }
    const data = await request.get('https://the-one-api.dev/v2/character', { headers: headers });

    this.setState({ characterState: data });
    console.log(this.state.characterState);

  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}
