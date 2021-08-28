import React from 'react';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <NavLink to="/home" activeClassName="active">/home</NavLink>
        <NavLink to="/songListCategory" activeClassName="active">/songListCategory</NavLink>
        <NavLink to="/songList" activeClassName="active">/songList</NavLink>
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/home">home</Route>
          <Route path="/songListCategory">songListCategory</Route>
          <Route path="/songList">songList</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
