import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import "./NavHeader.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

export default function NavHeader(props) {
  let historyIns = useHistory();
  return (
    <header className="nav-header">
      <div className="nav-btns">
        <div
          className="btn back"
          onClick={() => {
            historyIns.goBack();
          }}
          title="后退"
        >
          <SvgIcon iconName="arrow-left"></SvgIcon>
        </div>
        <div
          className="btn forward"
          onClick={() => {
            historyIns.goForward();
          }}
          title="前进"
        >
          <SvgIcon iconName="arrow-right"></SvgIcon>
        </div>
      </div>
      <div className="navs">
        <NavLink to="/home" className="nav" activeClassName="active">
          首页
        </NavLink>
        <NavLink to="/songList" className="nav" activeClassName="active">
          歌单
        </NavLink>
      </div>
      <div className="mode"></div>
    </header>
  );
}
