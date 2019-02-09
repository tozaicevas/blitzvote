import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import { history } from "./state";
import Layout from "./components/Layout";
import "./App.css";
import Candidates from "./views/Candidates";
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
                <Route exact path="/candidates" component={Candidates}/>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
