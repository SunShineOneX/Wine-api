import React, { Component } from 'react'
import axios from "axios";
const api_call = "http://myapi-profstream.herokuapp.com/api/ff9219/wines";

 class Wine02 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      baseInfo: [],
    };
  }

  async getWineInfo() {
    try {
      const res = await axios.get(api_call);
      this.setState({ baseInfo: res.data[1] });

      
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
          <div class="container">
            <div class="card">
              <div class="col-lg">
              <h3>{this.state.baseInfo.name}</h3>
                    <img src={(this.state.baseInfo.picture)} />
                    <h6>ID: {this.state.baseInfo.id}</h6>
                    <h6>From {this.state.baseInfo.year}</h6>
                    <h6>Made from {this.state.baseInfo.grapes} grapes</h6>  
                    <h6>from {this.state.baseInfo.country}</h6>  
                    <h6>in {this.state.baseInfo.region}</h6>  
                    <h6>{this.state.baseInfo.description}</h6>  
                    <h6>${this.state.baseInfo.price}</h6>
                    <button>Buy now!</button>    

              </div>
            </div>
          </div>
        </div>
    )
    }
}

export default Wine02;