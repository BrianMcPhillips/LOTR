import React, { Component } from 'react';
import Character from './Character/Character';
import styles from './CharacterList.module.css';

export default class CharacterList extends Component {
  render() {
    const { data, next, prev, page, totPages } = this.props;
    return (
      <div className={styles.list}>
        {
          data.map(character => <Character key={character._id} data={character}/>)
        }
        <div className={styles.page}>
          <h4>{page} of {totPages}</h4>
          <div className={styles.buttons}>
            {
              page !== 1 && 
                <button onClick={prev}>Prev</button>
            }
            {
              page !== totPages && 
                <button onClick={next}>Next</button>
            }
          </div>
        </div>
      </div>
    )
  }
}
