import React, { Component } from 'react';
import request from 'superagent';
import styles from './SearchPage.module.css';
import CharacterList from './CharacterList/CharacterList';
import SearchBar from './SearchBar/SearchBar';
import { options } from '../../assets/data.js';

export default class SearchPage extends Component {
  state = {
    characterState: [],
    term: '',
    searchBy: 'name'
  }

  componentDidMount = async() => {
    const data = await request
      .get('https://the-one-api.dev/v2/character')
      .set('Authorization', 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN)
      .accept('application/json');

    this.setState({ characterState: data.body.docs });
  }
  makeRequest = async() => {
    const data = await request
      .get(`https://the-one-api.dev/v2/character?${this.state.searchBy}=${this.state.term}&limit=20`)
      .set('Authorization', 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN)
      .accept('application/json');
    this.setState({ characterState: data.body.docs });
    console.log(this.state.characterState);
  }
  handleSearchBy = (e) => {
    this.setState({ term: e.target.value})
  }
  handleOption = (e) => {
    this.setState({ searchBy: e.target.value })
  }
  handleClick = (e) => {
    this.makeRequest()
  }

  render() {
    const { characterState } = this.state;
    return (
      <div className={styles.searchPage}>
        <SearchBar 
          searchBy={this.handleSearchBy}
          hanOption={this.handleOption}
          options={options}
          hanClick={this.handleClick}/> 
        <CharacterList data={characterState}/>
      </div>
    )
  }
}
