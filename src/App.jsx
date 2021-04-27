import React, {useState} from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Menu,
  Segment,
  Icon,
  Divider,
  Message
} from "semantic-ui-react";
import {BrowserView, MobileView} from "react-device-detect";

import Attribution from "./components/attribution.jsx";
import PageHeader from "./components/header.jsx";
import Home from "./pages/home.jsx";
import Quiz from "./pages/quiz.jsx";
import Result from "./pages/result.jsx";
import NotFound from "./pages/not-found.jsx";
import PossibleResults from "./pages/possible-results.jsx";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

export default function App() {
  return (<Container className="App">
    <BrowserView>
      <Segment inverted vertical textAlign="center">
        <Router basename="/" hashType="slash">
          <PageHeader/>
          <div>
            <Switch>
              <Route exact={true} path="/">
                <Home/>
              </Route>
              <Route path="/quiz">
                <Quiz />
              </Route>
              <Route path="/result/*">
                <Result />
              </Route>
              <Route exact path="/possible-results">
                <PossibleResults />
              </Route>
              <Route exact={true} path="/not-found">
                <NotFound/>
              </Route>
              <Redirect to="/not-found"/>
            </Switch>
          </div>
          <Attribution/>
        </Router>
      </Segment>
    </BrowserView>
    <MobileView>
      <Container className="App">
        <Segment inverted vertical textAlign="center">
          <Message negative floating icon='warning' content='Not supported on mobile. Please use a desktop browser to access this site.'/>
          <Attribution/>
        </Segment>
      </Container>
    </MobileView>
  </Container>);
}
