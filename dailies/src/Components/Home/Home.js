import React, { Component } from "react";
import Nav from "../Nav/Nav"
import Days from "../Days/Days"

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Nav />
        <Days />
      </div>
    );
  }
}

export default Home;
