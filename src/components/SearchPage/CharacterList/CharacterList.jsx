import React, { Component } from 'react';
import Character from './Character/Character';

export default class CharacterList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {
          data.map(character => <Character key={character._id} data={character}/>)
        }
      </div>
    )
  }
}
