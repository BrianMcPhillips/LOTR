import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Character.module.css';

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
      <div className={styles.character}>
        <Link to={`/detail/${_id}`}>
          <h3>{name}</h3>
        </Link>
        <h4>{race}</h4>
        <p>{realm}</p>
        <a target='_blank' rel='noreferrer' href={wikiUrl}>Character Url</a>
      </div>
    )
  }
}
