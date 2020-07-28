import React, { Component } from 'react'
import axios from "axios";
const api_call = "http://myapi-profstream.herokuapp.com/api/ff9219/wines";

 class Wine01 extends Component {
     constructor(props) {
         super(props)
         this.state = {
             info: [],
         }
     }

     async getWineInfo() {
         try {
             const res = await axios.get(api_call)
         }
     }
     
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Wine01;