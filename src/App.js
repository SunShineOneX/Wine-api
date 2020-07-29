import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import axios from "axios";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
