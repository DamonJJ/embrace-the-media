import React, { Component } from "react";
import PhotoArt from "./PhotoArt";

export default class Podcast extends Component {
  render() {
    return (
      <div className="">
        {this.props.results === undefined
          ? "nope"
          : this.props.results.map((result, i) => {
              return (
                  <h1 className="mediaTitle" key={i}>{result.artistName}</h1>
              )
            })}
      </div>
    );
  }
}
