import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Character extends Component {
  render() {
    const { 
      data: {
        name, 
        race, 
        realm,
        wikiUrl,
        _id
      }
     } = this.props;
    return (
      <div>
        <Link to={`/detail/${_id}`}>
          <h3>{name}</h3>
        </Link>
        <h4>{race}</h4>
        <p>{realm}</p>
        <p>{wikiUrl}</p>
      </div>
    )
  }
}
