import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default class TV extends Component {
  constructor() {
    super();

    this.state = {
      tv: []
    };
  }
  componentDidMount() {
    axios
      .all([
        axios.get(
          "https://itunes.apple.com/search?term=i+zombie&media=tvShow&limit=1"
        )
      ])
      .then(data => {
        this.setState({ tv: data[0].data });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.tv.results === undefined
          ? "nope"
          : this.state.tv.results.map((result, i) => {
              return (
                <div>
                  <h1 className="mediaTitle" key={i}>
                  <Link to="/">{result.artistName}</Link>
                  </h1>
                  <p className="aboutMedia">{result.longDescription}</p>
                </div>
              );
            })}
      </div>
    );
  }
}
