import React from "react";

import "./DailyRecommend.scss";

export default class DailyRecommend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="daily-recommend">
        <h2 className="left-title">每日推荐</h2>
        <div className="play-btn"></div>
      </div>
    );
  }
}
