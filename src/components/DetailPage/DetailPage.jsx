import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';

export default class DetailPage extends Component {
  state = {
    character: {}
  }
  componentDidMount = async() => {
    const id = this.props.match.params.characterId;
    console.log(id);
    const data = await request
      .get(`https://the-one-api.dev/v2/character/${id}`)
      .set('Authorization', 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN)
      .accept('application/json');
    this.setState({ character: data.body.docs[0] });
    console.log(this.state.character);
  }
  
  render() {
    const {
      character: {
        name, 
        race, 
        realm,
        wikiUrl
      }
    } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <h3>{realm}</h3>
        <p>{race}</p>
        <a target='_blank' rel='noreferrer' href={`${wikiUrl}`}>{wikiUrl}</a>
      
      </div>
    )
  }
}
