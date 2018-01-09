import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    axios
      .all([
        axios.get(
          "https://itunes.apple.com/search?term=guardians+of+the+galaxy&entity=movie&limit=1"
        )
      ])
      .then(data => {
        this.setState({ movies: data[0].data });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.movies.results === undefined
          ? "nope"
          : this.state.movies.results.map((result, i) => {
              return (
                <div>
                  <h1 className="mediaTitle" key={i}>
                  <Link to="/">{result.trackCensoredName}</Link>
                  </h1>
                  <p className="aboutMedia">{result.shortDescription}</p>
                </div>
              );
            })}
      </div>
    );
  }
}
