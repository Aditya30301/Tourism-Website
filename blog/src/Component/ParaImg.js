import React, { Component } from "react";

import { Pannellum } from "pannellum-react";
import myImage from "../images/samu.jpg";
import imgone from "../images/pone.jpg";
import Typography from "@material-ui/core/Typography";
class ParaImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaPhoto: [myImage],
    };
  }

  render() {
    return (
      <div>
        <Typography variant="h2">
          <center>360 Experience</center>
        </Typography>
        <Pannellum
          width="100%"
          height="500px"
          image={this.state.mediaPhoto}
          pitch={10}
          yaw={180}
          hfov={500}
          autoLoad
          author=""
          title=""
          orientationOnByDefault={false}
          draggable
          keyboardZoom
          mouseZoom
          preview=""
          previewAuthor=""
          previewTitle=""
          showControls
          showFullscreenCtrl
          showZoomCtrl
          onLoad={() => {
            console.log("panorama loaded");
          }}
          onScenechange={(id) => {
            console.log("Scene has change on " + id);
          }}
          onScenechangefadedone={() => {
            console.log("panorama loaded");
          }}
          onError={(err) => {
            console.log("Error", err);
          }}
          onErrorcleared={() => {
            console.log("Error Cleared");
          }}
          onMousedown={(evt) => {
            console.log("Mouse Down", evt);
          }}
          onMouseup={(evt) => {
            console.log("Mouse Up", evt);
          }}
          onTouchstart={(evt) => {
            console.log("Touch Start", evt);
          }}
          onTouchend={(evt) => {
            console.log("Touch End", evt);
          }}
          hotspotDebug={false}
        >
          <Pannellum.Hotspot
            type="info"
            pitch={11}
            yaw={-167}
            text="Info Hotspot Text 3"
            URL="https://github.com/farminf"
          />

          <Pannellum.Hotspot
            type="custom"
            pitch={31}
            yaw={150}
            handleClick={(evt, args) => this.hanldeClickImage(evt, args)}
            handleClickArg={{ name: "test" }}
          />
        </Pannellum>
      </div>
    );
  }
}

export default ParaImg;
