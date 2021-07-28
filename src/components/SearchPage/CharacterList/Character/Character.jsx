import React, { Component } from 'react'

export default class Character extends Component {
  render() {
    const { 
      data: {
        name, 
        race, 
        realm,
        wikiUrl
      }
     } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <h4>{race}</h4>
        <p>{realm}</p>
        <p>{wikiUrl}</p>
      </div>
    )
  }
}
