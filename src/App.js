import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import { history } from "./state";
import Layout from "./components/Layout";
import "./App.css";
import MainView from "./views/Main";
import CandidatesPage from "./components/candidates/CandidatesPage";
import NeatsakytiView from "./views/Neatsakyti";
import CandidatePage from "./components/CandidatePage";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={MainView} />
              <Route exact path="/kandidatai" component={CandidatesPage} />
              <Route exact path="/kandidatai/:id" component={CandidatePage} />
              <Route exact path="/neatsakyti" component={NeatsakytiView} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
