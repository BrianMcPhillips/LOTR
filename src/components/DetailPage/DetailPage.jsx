import React, { Component } from 'react';
import request from 'superagent';

export default class DetailPage extends Component {
  state = {
    character: {}
  }
  componentDidMount = async() => {
    const id = this.props.match.params.characterId;
    const data = await request
      .get(`https://the-one-api.dev/v2/character/${id}`)
      .set('Authorization', 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN)
      .accept('application/json');
    this.setState({ character: data.body.docs[0] });
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
        {
          realm && <h3>Realm: {realm}</h3>
        }
        {
          race && <p>Race: {race}</p>
        }
        <a target='_blank' rel='noreferrer' href={`${wikiUrl}`}>{wikiUrl}</a>
      </div>
    )
  }
}
