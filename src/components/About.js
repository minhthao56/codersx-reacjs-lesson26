import React, { Component } from "react";
import "../styles/About.css";

export class About extends Component {
  render() {
    return (
      <div className="card-me">
        <img src="https://picsum.photos/200" />
        <div className="about-me">
          <h1>About Me</h1>
          <span>
            My name is Minh Thao. I'm interested in about JS, Clean Code,
            Performance.I'm studying in CodersX
          </span>
        </div>
      </div>
    );
  }
}

export default About;
