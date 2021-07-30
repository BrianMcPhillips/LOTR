import React, { Component } from 'react';
import request from 'superagent';
import styles from './SearchPage.module.css';
import CharacterList from './CharacterList/CharacterList';
import SearchBar from './SearchBar/SearchBar';
import { options, category } from '../../assets/data.js';

export default class SearchPage extends Component {
  state = {
    characterState: [],
    term: '',
    searchBy: 'name',
    currentPage: 1,
    totalPage: 1,
    category: 'character'
  }

  componentDidMount = async() => {
    const params = new URLSearchParams(this.props.location.search);
    const cateGory = params.get('category');
    const searchBy = params.get('searchBy');
    const term = params.get('term');
    const page = Number(params.get('page'));

    if(searchBy !== null) {
      await this.setState({
        category: cateGory,
        searchBy: searchBy,
        term: term,
        page: page
      })
    }
    this.makeRequest();
  }
  makeRequest = async() => {
    const data = await request
      .get(`https://the-one-api.dev/v2/${this.state.category}?${this.state.searchBy}=${this.state.term}&page=${this.state.currentPage}&limit=20`)
      .set('Authorization', 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN)
      .accept('application/json');
      // console.log('filter ====>', data);
    this.setState({ 
      characterState: data.body.docs,
      totalPage: data.body.pages
    });

    const params = new URLSearchParams(this.props.location.search);
    params.set('category', this.state.category);
    params.set('searchBy', this.state.searchBy);
    params.set('term', this.state.term);
    params.set('page', this.state.currentPage);
    this.props.history.push('?' + params.toString());
  }
  handleSearchBy = (e) => {
    this.setState({ term: e.target.value})
  }
  handleOption = (e) => {
    this.setState({ searchBy: e.target.value })
  }
  handleCategory = (e) => {
    this.setState({ category: e.target.value })
  }
  handleClick = (e) => {
    this.setState({ currentPage: 1 })
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
          hanClick={this.handleClick}
          category={category}
          hanCategory={this.handleCategory}/> 
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
