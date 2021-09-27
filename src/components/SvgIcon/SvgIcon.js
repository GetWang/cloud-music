import React from "react";

import "./SvgIcon.scss";

export default class SvgIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let svgEl;
    switch (this.props.iconName) {
      case "arrow-left":
        svgEl = (
          <svg
            focusable="false"
            data-prefix="fas"
            data-icon="angle-left"
            className="svg-icon svg-inline--fa fa-angle-left fa-w-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path
              fill="currentColor"
              d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
            ></path>
          </svg>
        );
        break;
      case "arrow-right":
        svgEl = (
          <svg
            focusable="false"
            data-prefix="fas"
            data-icon="angle-right"
            className="svg-icon svg-inline--fa fa-angle-right fa-w-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path
              fill="currentColor"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
            ></path>
          </svg>
        );
        break;
      case "play":
        svgEl = (
          <svg
            focusable="false"
            data-prefix="fas"
            data-icon="play"
            className="svg-icon svg-inline--fa fa-play fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            ></path>
          </svg>
        );
        break;
      case "pause":
        svgEl = (
          <svg
            focusable="false"
            data-prefix="fas"
            data-icon="pause"
            className="svg-icon svg-inline--fa fa-pause fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
            ></path>
          </svg>
        );
        break;
      case "prev":
        svgEl = (
          <svg
            focusable="false"
            data-prefix="fas"
            data-icon="step-backward"
            className="svg-icon svg-inline--fa fa-step-backward fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"
            ></path>
          </svg>
        );
        break;
      case "next":
        svgEl = (
          <svg
            focusable="false"
            data-prefix="fas"
            data-icon="step-forward"
            className="svg-icon svg-inline--fa fa-step-forward fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
            ></path>
          </svg>
        );
        break;
      case "fm":
        svgEl = (
          <svg
            focusable="false"
            data-prefix="far"
            data-icon="radio-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-icon svg-inline--fa fa-radio-alt fa-w-16 fa-7x"
          >
            <path
              fill="currentColor"
              d="M209 368h-64a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm144 56a72 72 0 1 0-72-72 72.09 72.09 0 0 0 72 72zm96-296H212.5l288.83-81.21a16 16 0 0 0 11.07-19.74l-4.33-15.38A16 16 0 0 0 488.33.6L47.68 124.5A64 64 0 0 0 1 186.11V448a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm16 320a16 16 0 0 1-16 16H65a16 16 0 0 1-16-16V256h416zM113 336h128a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H113a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16z"
            ></path>
          </svg>
        );
        break;
      default:
        svgEl = <i className="svg-icon"></i>;
        break;
    }
    return svgEl;
  }
}
