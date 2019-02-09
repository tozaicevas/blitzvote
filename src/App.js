import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import { history } from "./state";
import Layout from "./components/Layout";
import "./App.css";
import MainView from "./views/Main";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={MainView} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
