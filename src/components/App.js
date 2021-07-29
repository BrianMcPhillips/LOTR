import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import Header from './Header/Header';
import DetailPage from './DetailPage/DetailPage';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header />
          <Switch>
            <Route
              path='/'
              exact
              render={ (routerProps) => <SearchPage {...routerProps} /> }
            />
            <Route 
              path='/detail'
              exact
              render={ (routerProps) => <DetailPage {...routerProps} /> }
            />
          </Switch>
        </Router>

      </div>
    )
  }
}

