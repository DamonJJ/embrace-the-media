import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default class Podcast extends Component {
  constructor() {
    super();

    this.state = {
      podcasts: []
    };
  }
  componentDidMount() {
    axios
      .all([
        axios.get(
          "https://itunes.apple.com/search?term=syntax&entity=podcast&limit=1"
        )
      ])
      .then(data => {
        this.setState({ podcasts: data[0].data });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.podcasts.results === undefined
          ? "nope"
          : this.state.podcasts.results.map((result, i) => {
              return (
                <div>
                  <h1 className="mediaTitle" key={i}>
                    <Link to="/">{result.artistName}</Link>
                  </h1>
                  <p className="aboutMedia">{result.collectionName}</p>
                </div>
              );
            })}
      </div>
    );
  }
}
