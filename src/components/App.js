import React, { Component } from 'react';
import "../styles/style.css";
import { Link } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div className="App">
      <h1 className="mainHeader">...what I waste my time on</h1>
      <p className="about">A visual to show what media Damon wasted his time on this week. For the folks at Embrace.io</p>
        <div className="control-buttons">
          <Link className="button" to="/podcast">
            <button>Podcasts</button>
          </Link>
          <Link className="button" to="/movies">
            <button>Movies</button>
          </Link>
          <Link className="button" to="/tv">
            <button>TV</button>
          </Link>
        </div>
      </div>
    );
  }
}
