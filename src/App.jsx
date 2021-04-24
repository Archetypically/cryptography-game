import React, {useState} from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import { Button, Container, Header, Menu, Segment, Icon, Divider } from "semantic-ui-react";

import Attribution from "./components/attribution.jsx";
import PageHeader from "./components/header.jsx";
import Home from "./pages/home.jsx";
import Quiz from "./pages/quiz.jsx";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

export default function App() {
  return (
    <Container className="App" >
      <Segment inverted vertical textAlign="center">
        <Router basename="/" hashType="slash">
          <PageHeader />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/quiz">
                <Quiz />
              </Route>
            </Switch>
          </div>

          <Attribution />
        </Router>
      </Segment>
    </Container>
  );
}
