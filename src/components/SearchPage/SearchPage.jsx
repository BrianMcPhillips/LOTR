import React, { Component } from 'react';
import request from 'superagent';
import CharacterList from './CharacterList/CharacterList';

export default class SearchPage extends Component {
  state = {
    characterState: []
  }
  componentDidMount = async() => {
    
    const data = await request
      .get('https://the-one-api.dev/v2/character')
      .set('Authorization', 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN)
      .accept('application/json');

    this.setState({ characterState: data.body.docs });
    console.log(this.state.characterState);

  }

  render() {
    const { characterState } = this.state;
    return (
      <div>
        <CharacterList data={characterState}/>
      </div>
    )
  }
}
