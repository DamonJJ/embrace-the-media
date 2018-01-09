import React, { Component } from 'react';
import axios from 'axios';
import Podcast from './Podcast';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      podcasts: [],
      albums: []
    };
  }

  componentDidMount() {
    axios.all([
      axios.get('https://itunes.apple.com/search?term=syntax&entity=podcast&limit=1'),
      axios.get('https://itunes.apple.com/lookup?id=909253&entity=album')
    ]).then((data) => {
      this.setState({podcasts: data[0].data, albums: data[1].data})
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <div className="header__title">
            <h1>Embrace the Media</h1>
          </div>
        </div>
        <div className="app__content">
          <div className="content__search content__search--with-full_name">
            <Podcast {...this.state.podcasts} />
          </div>
        </div>
      </div>
    );
  }
}
