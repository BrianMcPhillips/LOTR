import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    const { searchBy, options, hanOption, hanClick } = this.props;
    return (
      <div>
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
