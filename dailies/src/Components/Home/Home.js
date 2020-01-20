import React, { Component } from "react";
import Header from "../Header/Header"
import Days from "../Days/Days"

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Days />
      </div>
    );
  }
}

export default Home;
