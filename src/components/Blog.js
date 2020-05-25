import React, { Component } from "react";
import "../styles/Blog.css";
import { Container, Row, Col } from "reactstrap";

export class Blog extends Component {
  render() {
    return (
      <div className="colum">
        <div className="book-list">
          <img src={this.props.image} />
          <div className="description">
            <h3>{this.props.tl}</h3>
            {/* <span>{this.props.description}</span> */}
          </div>
          <div className="button-cart">
            {" "}
            <button>See More</button>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
