import React, { Component } from "react";
import Nav from "../Nav/Nav"
import Days from "../Days/Days"

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Nav />
        <div className="main">
          <Days />
        </div>
      </div>
    );
  }
}

export default Home;
