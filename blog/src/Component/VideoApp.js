import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./VideoApp.css";

export default class VideoApp extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="player-wrapper d-flex">
            <ReactPlayer
              className="react-player"
              url={[
                "https://www.youtube.com/watch?v=uFmEwBTQKDA&t=336s",
                "https://www.youtube.com/watch?v=jNgP6d9HraI",
                "https://www.youtube.com/watch?v=yque3Zes0eg",
              ]}
              width="100%"
              height="100%"
              controls="true"
              playsinline="true"
            />
          </div>
        </div>
      </div>
    );
  }
}
