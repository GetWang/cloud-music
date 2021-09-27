import React from "react";

import "./PersonalFM.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

export default class PersonalFM extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personal-fm">
        <img className="cover" src=""></img>
        <div className="desc-control">
          <h2 className="song-name">Blue Bossa (Feat. Leif Shires)</h2>
          <p className="singer-name">Jack Jezzro And Friends</p>
          <div className="control">
            <div className="btns">
              <div className="btn prev">
                <SvgIcon iconName="prev"></SvgIcon>
              </div>
              <div className="btn play">
                <SvgIcon iconName="play"></SvgIcon>
              </div>
              <div className="btn next">
                <SvgIcon iconName="next"></SvgIcon>
              </div>
            </div>
            <div className="fm-mark">
              <div className="icon">
                <SvgIcon iconName="fm"></SvgIcon>
              </div>
              <p className="text">私人FM</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
