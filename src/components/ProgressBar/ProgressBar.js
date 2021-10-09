import React, { useEffect } from "react";

import "./ProgressBar.scss";
import { judgeNumInRegion } from "../../common/js/util";

export default function ProgressBar(props) {
  const progressBarRef = React.createRef();
  const lineBarRef = React.createRef();
  let progressBarWidth = 0;
  let initLineBarWidth = 0;
  let liveLineBarWidth = 0;
  let btnMouseInfo = {
    downFlag: false,
    startX: 0,
  };

  useEffect(() => {
    if (!btnMouseInfo.downFlag) {
      progressBarWidth = progressBarRef.current.clientWidth;
      const width = props.rate * progressBarWidth;
      _offset(width);
    }
  }, [props.rate]);

  function handleBtnMouseDown(e) {
    console.log("handleBtnMouseDown");
    initLineBarWidth = lineBarRef.current.clientWidth;
    liveLineBarWidth = initLineBarWidth;
    console.log("1111", liveLineBarWidth);
    btnMouseInfo = {
      downFlag: true,
      startX: e.pageX,
    };
  }
  function handleBtnMouseMove(e) {
    if (!btnMouseInfo.downFlag) {
      return;
    }
    console.log("handleBtnMouseMove");
    const deltaX = e.pageX - btnMouseInfo.startX;
    const width = initLineBarWidth + deltaX;
    liveLineBarWidth = judgeNumInRegion(width, 0, progressBarWidth);
    _offset(liveLineBarWidth);
  }
  function handleBtnMouseUp() {
    console.log("handleBtnMouseUp");
    btnMouseInfo = {
      downFlag: false,
      startX: 0,
    };
    console.log("222", liveLineBarWidth);
    _triggerRateChange(liveLineBarWidth);
  }
  function _offset(width) {
    width = width.toFixed(1);
    lineBarRef.current.style.width = width + "px";
  }
  function _triggerRateChange(width) {
    const rate = parseFloat((width / progressBarWidth).toFixed(3));
    props.onRateChange(rate);
  }

  const heightStyle = { height: props.height + "px" };
  const bgStyle = { background: props.barColor };
  const radiusStyle = { borderRadius: props.height / 2 + "px" };
  const progressBarStyle = { ...heightStyle, ...radiusStyle };
  const lineBarStyle = { ...bgStyle, ...radiusStyle };

  return (
    <div className="progress-bar" ref={progressBarRef} style={progressBarStyle}>
      <div className="line-bar" ref={lineBarRef} style={lineBarStyle}>
        <div
          className="circle"
          title={props.progressInfo}
          style={bgStyle}
          onMouseDown={handleBtnMouseDown}
          onMouseMove={handleBtnMouseMove}
          onMouseUp={handleBtnMouseUp}
        ></div>
      </div>
    </div>
  );
}
