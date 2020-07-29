import React, { Component } from "react";
import axios from "axios";
const api_call = "http://myapi-profstream.herokuapp.com/api/ff9219/wines";

class Wine01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseInfo: [],
      id: [],
    };
  }

  async getWineInfo() {
    try {
      const res = await axios.get(api_call);
      this.setState({ baseInfo: res.data[0] });
      this.setState({ id: this.state.baseInfo.id});
      
    } catch {
      console.log("error!!!!");
    }
  }
  componentDidMount() {
    this.getWineInfo();
  }

  render() {
    return (
    
        <div>
            <h1>Hello world!!!!!!</h1>
            <h1>{this.state.baseInfo.id}</h1>
            <h2>{this.state.baseInfo.name}</h2>
            <h2>{this.state.baseInfo.year}</h2>
        </div>
    )
    }
}

export default Wine01;
