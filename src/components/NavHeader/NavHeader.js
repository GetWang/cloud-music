import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./NavHeader.scss";
import SvgIcon from "../SvgIcon/SvgIcon";
import { changeTheme } from "../../store/slices";
import { selectTheme } from "../../store/selectors";

export default function NavHeader(props) {
  const historyIns = useHistory();
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  function changeThemeMode() {
    const t = theme === "light" ? "dark" : "light";
    dispatch(changeTheme(t));
  }

  const themeIconName = `theme-${theme}`;
  const themeBtnTitle = theme === "light" ? "浅色" : "深色";

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
      <div className="mode" title={themeBtnTitle} onClick={changeThemeMode}>
        <SvgIcon iconName={themeIconName}></SvgIcon>
      </div>
    </header>
  );
}
