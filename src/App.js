import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import imgBlog from "./images/blog.png";
// import Pagination from "./components/Pagination";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Container,
} from "reactstrap";
import { Pagination } from "antd";
import "antd/dist/antd.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      value: "",
      titile: [],
      currentPage: 1,
      perPage: 12,
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      this.setState({
        titile: res.data,
      });
    });
  }
  toggle = () => {
    console.log(this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  onChange = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };
  render() {
    // Pagination
    const { titile, perPage, currentPage } = this.state;
    const start = (currentPage - 1) * perPage;
    const end = currentPage * perPage;
    const currentArr = titile.slice(start, end);
    // const handalPage = (num) =>
    //   this.setState({
    //     currentPage: num,
    //   });
    // filter last 5 last blog
    // const sortArr = titile.sort;
    const cutArr = titile.slice(0, 5);
    console.log(cutArr);
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              {<img src={imgBlog} style={{ height: 32, width: 32 }} />} MY BLOG
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <div className="link">
                    <Link to="/">Home</Link>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="link">
                    <Link to="/blog">Blog</Link>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="link">
                    <Link to="/about">About</Link>
                  </div>
                </NavItem>
              </Nav>
              <NavbarText>Minh Thao</NavbarText>
            </Collapse>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Container>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/blog">
                <Pagination
                  showQuickJumper
                  defaultCurrent={1}
                  total={500}
                  onChange={this.onChange}
                />
                <div className="container-list">
                  {currentArr.map((tlbook) => {
                    return <Blog tl={tlbook.title} image={tlbook.url} />;
                  })}
                </div>
                {/* <Blog /> */}
                {/* <Pagination
                  totalPages={titile.length}
                  perPage={perPage}
                  handalPage={handalPage}
                /> */}
              </Route>
              <Route path="/">
                <h1>Last My Blog</h1>
                {cutArr.map((news) => {
                  return <Home title={news.title} url={news.url} />;
                })}
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}
export default App;
