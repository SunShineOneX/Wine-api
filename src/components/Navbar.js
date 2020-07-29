import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import Home from "./Home";
import Wine01 from "./Wine01";
import Wine02 from "./Wine02";
import Wine03 from "./Wine03";
import Wine04 from "./Wine04";
import Wine05 from "./Wine05";
import Wine06 from "./Wine06";
import Wine07 from "./Wine07";
import Wine08 from "./Wine08";

const api_call = "http://myapi-profstream.herokuapp.com/api/ff9219/wines";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      wine1: [],
      wine2: [],
      wine3: [],
      wine4: [],
      wine5: [],
      wine6: [],
      wine7: [],
      wine8: [],
    };
  }

  async getWineInfo() {
    try {
      const res = await axios.get(api_call);
      this.setState({ info: res.data });
      this.setState({ wine1: this.state.info[0] });
      this.setState({ wine2: this.state.info[1] });
      this.setState({ wine3: this.state.info[2] });
      this.setState({ wine4: this.state.info[3] });
      this.setState({ wine5: this.state.info[4] });
      this.setState({ wine6: this.state.info[5] });
      this.setState({ wine7: this.state.info[6] });
      this.setState({ wine8: this.state.info[7] });
    } catch {
      console.log("error!!!!");
    }
  }
  componentDidMount() {
    this.getWineInfo();
  }

  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#"><Link to ="/">Wine Finder</Link></a>
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
                  Wines
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#"><Link to="/wines/6514">{this.state.wine1.name}</Link></a>
                  <a class="dropdown-item" href="#"><Link to="/wines/6515">{this.state.wine2.name}</Link></a>
                  <a class="dropdown-item" href="#"><Link to="/wines/6516">{this.state.wine3.name}</Link></a>
                  <a class="dropdown-item" href="#"><Link to="/wines/6517">{this.state.wine4.name}</Link></a>
                  <a class="dropdown-item" href="#"><Link to="/wines/6518">{this.state.wine5.name}</Link></a>
                  <a class="dropdown-item" href="#"><Link to="/wines/6519">{this.state.wine6.name}</Link></a>
                  <a class="dropdown-item" href="#"><Link to="/wines/6520">{this.state.wine7.name}</Link></a>
                  <a class="dropdown-item" href="#"><Link to="/wines/6521">{this.state.wine8.name}</Link></a>
                </div>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/wines/6514" component={Wine01} />
            <Route path="/wines/6515" component={Wine02} />
            <Route path="/wines/6516" component={Wine03} />
            <Route path="/wines/6517" component={Wine04} />
            <Route path="/wines/6518" component={Wine05} />
            <Route path="/wines/6519" component={Wine06} />
            <Route path="/wines/6520" component={Wine07} />
            <Route path="/wines/6521" component={Wine08} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar;
