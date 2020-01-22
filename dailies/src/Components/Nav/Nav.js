import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <header className="header">
        <a href="/" className="logo">Practically<br/>Imperfect</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
        <ul className="menu">
          <li><a href="#">About</a></li>
          <li><a href="#">Key</a></li>
        </ul>
      </header>
    );
  }
}

export default Nav;