import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import NavHeader from "./components/NavHeader/NavHeader";
import HomeView from "./views/home/home";
import SongListView from "./views/songList/songList";
import SongListDetailView from "./views/songListDetail/songListDetail";
import Player from "./components/Player/Player";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <NavHeader></NavHeader>
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/home">
            <HomeView></HomeView>
          </Route>
          <Route path="/songList">
            <SongListView></SongListView>
          </Route>
          <Route path="/songListDetail/:id">
            <SongListDetailView></SongListDetailView>
          </Route>
        </Switch>
      </BrowserRouter>
      <Player></Player>
    </div>
  );
}

export default App;
