import React, { Component } from "react";
import { Router } from "react-router";
import { history } from "./state";
import Layout from "./components/Layout";
import "./App.css";
import FeedGrid from "./components/FeedGrid";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Router history={history}>
          <Layout>
            <FeedGrid />
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
