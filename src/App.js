import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";
import NavHeader from "./components/NavHeader/NavHeader";
import HomeView from "./views/home/home";
import SongListView from "./views/songList/songList";
import SongListDetailView from "./views/songListDetail/songListDetail";
import Player from "./components/Player/Player";
import { selectTheme } from "./store/selectors";

function App() {
  const theme = useSelector(selectTheme);
  const appCls = `theme-${theme}`;

  return (
    <div id="app" className={appCls}>
      <HashRouter>
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
      </HashRouter>
      <Player></Player>
    </div>
  );
}

export default App;
