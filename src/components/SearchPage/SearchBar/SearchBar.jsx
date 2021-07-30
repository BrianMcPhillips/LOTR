import React, { Component } from 'react';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  render() {
    const { 
      searchBy, 
      options, 
      hanOption, 
      hanClick,
      category,
      hanCategory
    } = this.props;
    
    return (
      <div className={styles.search}>
          <h2>What would you like to Search</h2>
          <h4>Category</h4>
          <select onChange={hanCategory}>
            {
              category.map(word => <option key={word} value={word}>{word}</option>)
            }
          </select>
          <input onChange={searchBy} type='text'></input>
          <select onChange={hanOption}>
            {
              options.map(word => <option key={word} value={word}>{word}</option>)
            }
          </select>
          <button onClick={hanClick}>Search</button>


      </div>
    )
  }
}
