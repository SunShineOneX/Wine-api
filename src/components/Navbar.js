import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";

import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
        <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            Wine Finder
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Action
                  <a class="dropdown-item" href="#">
                  Action
                </a>
                </a>
              </div>
            </ul>
          </div>
        </nav>
        <Switch>
            {/* <Route exact path="/wines" component={} />
            <Route path ="/wines/merlot" component={}/> */}
        </Switch>
      </div>
      </Router>
    );
  }
}

export default Navbar;
