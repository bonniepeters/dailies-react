import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <header className="header">
        <a href="/" className="logo">Practically Imperfect</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
        <ul className="menu">
          <li><a href="#dont">Don't</a></li>
          <li><a href="#forget">Forget</a></li>
          <li><a href="#subscribe">To Subscribe</a></li>
          <li><a href="#comment">& Comment</a></li>
        </ul>
      </header>
    );
  }
}

export default Nav;