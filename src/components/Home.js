import React, { Component } from "react";
import "../styles/Home.css";

export class Home extends Component {
  render() {
    const { title, url } = this.props;
    return (
      <div className="card-news">
        <img src={url} />
        <div className="content">
          <h1>{title}</h1>
          <span>
            How to use Action Text to build a rich text editor in Rails 6
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
