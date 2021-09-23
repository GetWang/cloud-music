import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import NavHeader from "./components/NavHeader/NavHeader";
import Home from "./views/home/home";
import SongList from "./views/songList/songList";
import SongListDetail from "./views/songListDetail/songListDetail";

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
          <Route path="/songList">
            <SongList></SongList>
          </Route>
          <Route path="/song">
            <SongListDetail></SongListDetail>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
