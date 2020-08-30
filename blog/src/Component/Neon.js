import React from "react";
import "./neon.css";
import Typography from "@material-ui/core/Typography";
const Neon = () => {
  return (
    <div className="row">
      <div className="col-10 mx-auto">
        <section>
          <br />
          <Typography variant="h4">
            <center>Top Places to Visit</center>
          </Typography>
          <div class="btn-row">
            <div class="ct-btn">
              <button class="sky-neon">Radhanagar beach</button>
            </div>
            <div class="ct-btn">
              <button class="breath-neon">Breath</button>
            </div>
            <div class="ct-btn">
              <button class="heart-bit-neon">Honey Moon Spot</button>
            </div>
          </div>

          <div class="btn-row">
            <div class="ct-btn">
              <button class="border-neon">Border</button>
            </div>
            <div class="ct-btn">
              <button class="inner-height-neon">
                <span class="bg-height"></span>
                <span class="btn-text">Neil Island</span>
              </button>
            </div>
            <div class="ct-btn">
              <button class="inner-width-neon">
                <span class="bg-width"></span>
                <span class="btn-text">Inner Width</span>
              </button>
            </div>
          </div>

          <div class="btn-row">
            <div class="ct-btn">
              <div class="gr-solid">
                <span class="gr-shadow1"></span>
                <button class="gradient-neon">Gradient</button>
              </div>
            </div>
            <div class="ct-btn">
              <div class="gr-move">
                <span class="gr-shadow2"></span>
                <button class="gradient-neon">Gradient Move</button>
              </div>
            </div>
            <div class="ct-btn">
              <div class="gr-tri">
                <span class="gr-shadow3"></span>
                <button class="gradient-neon">Flag Hosting Point</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Neon;
