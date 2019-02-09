import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import { history } from "./state";
import Layout from "./components/Layout";
import "./App.css";
import CandidatesView from "./views/Candidates";
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
<<<<<<< HEAD
                <Route exact path="/candidates" component={Candidates}/>
=======
                <Route exact path="/candidates" component={CandidatesView}/>
>>>>>>> 8e994eeb8950f751e464758dbf49ac602e6ebe5c
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
