import React from "react";

import "./PersonalFM.scss";

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
              <div className="btn prev"></div>
              <div className="btn play"></div>
              <div className="btn next"></div>
            </div>
            <div className="fm-mark">
              <i className="icon"></i>
              <p className="text">私人FM</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
