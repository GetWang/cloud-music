import React, { useState, useEffect } from "react";

import "./ProgressBar.scss";
import { judgeNumInRegion } from "../../common/js/util";

export default function ProgressBar(props) {
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [initLineBarWidth, setInitLineBarWidth] = useState(0);
  const [liveLineBarWidth, setLiveLineBarWidth] = useState(0);
  const [progressBarLeft, setProgressBarLeft] = useState(0);
  const [btnMouseInfo, setBtnMouseInfo] = useState({
    downFlag: false,
    startX: 0,
  });
  const progressBarRef = React.createRef();
  const lineBarRef = React.createRef();

  useEffect(() => {
    const el = progressBarRef.current;
    setProgressBarWidth(el.clientWidth);
    setProgressBarLeft(el.getBoundingClientRect().left);
  }, []);
  useEffect(() => {
    if (!btnMouseInfo.downFlag) {
      const el = progressBarRef.current;
      const width = props.rate * el.clientWidth;
      _offset(width);
    }
  }, [props.rate]);

  function chooseProgress(e) {
    const width = e.pageX - progressBarLeft;
    const w = judgeNumInRegion(width, 0, progressBarWidth);
    _triggerRateChange(w);
  }
  function handleBtnMouseDown(e) {
    console.log("handleBtnMouseDown");
    const width = lineBarRef.current.clientWidth;
    setInitLineBarWidth(width);
    setLiveLineBarWidth(width);
    console.log("1111", liveLineBarWidth);
    setBtnMouseInfo({
      downFlag: true,
      startX: e.pageX,
    });
  }
  function handleBtnMouseMove(e) {
    if (!btnMouseInfo.downFlag) {
      return;
    }
    console.log("handleBtnMouseMove");
    const deltaX = e.pageX - btnMouseInfo.startX;
    const width = initLineBarWidth + deltaX;
    const w = judgeNumInRegion(width, 0, progressBarWidth);
    setLiveLineBarWidth(w);
    _offset(w);
  }
  function handleBtnMouseUp() {
    console.log("handleBtnMouseUp");
    setBtnMouseInfo({
      downFlag: false,
      startX: 0,
    });
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
    <div
      className="progress-bar"
      ref={progressBarRef}
      style={progressBarStyle}
      onClick={chooseProgress}
    >
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
