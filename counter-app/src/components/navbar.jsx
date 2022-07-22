import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navBar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Productos{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
