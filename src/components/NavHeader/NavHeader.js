import React from "react";
import { NavLink } from "react-router-dom";

import "./NavHeader.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="nav-header">
        <div className="nav-btns">
          <div className="btn back">
            <SvgIcon iconName="arrow-left"></SvgIcon>
          </div>
          <div className="btn forward">
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
}
