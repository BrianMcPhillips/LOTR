import React, { Component } from 'react';
import Character from './Character/Character';
import styles from './CharacterList.module.css';

export default class CharacterList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.list}>
        {
          data.map(character => <Character key={character._id} data={character}/>)
        }
      </div>
    )
  }
}
