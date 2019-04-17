/*jshint esversion: 6 */
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/" className="title">
                Lead Manager
              </Link>
            </div>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start" />

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/register" className="button is-primary">
                    <strong>Register</strong>
                  </Link>
                  <Link to="/login" className="button is-light">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
