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
    searchBy: 'name',
    currentPage: 1,
    totalPage: 1
  }

  componentDidMount = async() => {
    const data = await request
      .get('https://the-one-api.dev/v2/character?limit=20')
      .set('Authorization', 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN)
      .accept('application/json');
    // console.log('initial---->', data);

    this.setState({ 
      characterState: data.body.docs,
      totalPage: data.body.pages
    });
  }

  makeRequest = async() => {
    const data = await request
      .get(`https://the-one-api.dev/v2/character?${this.state.searchBy}=${this.state.term}&page=${this.state.currentPage}&limit=20`)
      .set('Authorization', 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN)
      .accept('application/json');
      // console.log('filter ====>', data);
    this.setState({ 
      characterState: data.body.docs,
      totalPage: data.body.pages
    });

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
  handleNext = () => {
    this.setState({ currentPage: this.state.currentPage + 1 })
    this.makeRequest()
  }
  handlePrev = () => {
    this.setState({ currentPage: this.state.currentPage - 1 })
    this.makeRequest()
  }

  render() {
    const { characterState, currentPage, totalPage } = this.state;
    return (
      <div className={styles.searchPage}>
        <SearchBar 
          searchBy={this.handleSearchBy}
          hanOption={this.handleOption}
          options={options}
          hanClick={this.handleClick}/> 
        <CharacterList 
          data={characterState}
          next={this.handleNext}
          prev={this.handlePrev}
          page={currentPage}
          totPages={totalPage}/>
      </div>
    )
  }
}
