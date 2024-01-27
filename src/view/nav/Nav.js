import React from "react";
import "./Nav.scss";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/about">About</NavLink>
        {/* <Link to="/">Home</Link>
          <Link to="/todo">Home</Link>
          <Link to="/about">Home</Link> */}
      </div>
    );
  }
}
export default Nav;
