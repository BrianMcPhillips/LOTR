import React, { Component } from 'react';
import SearchPage from './SearchPage/SearchPage';
import Header from './Header/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchPage /> 
      </div>
    )
  }
}

