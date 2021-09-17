import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Add } from "./components/Add";
import { Watched } from "./components/Watched";
import { WatchList } from "./components/WatchList";
import "./lib/font-awesome/css/all.min.css";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <WatchList />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
