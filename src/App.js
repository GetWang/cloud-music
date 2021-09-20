import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.scss";
import Home from "./views/home/home";
import NavHeader from "./components/NavHeader/NavHeader";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <NavHeader></NavHeader>
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/songListCategory">songListCategory</Route>
          <Route path="/songList">songList</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
