import React from "react";
import "./neon.css";
const Neon = () => {
  return (
    <section>
      <div class="btn-row">
        <div class="ct-btn">
          <button class="sky-neon">Solid</button>
        </div>
        <div class="ct-btn">
          <button class="breath-neon">Breath</button>
        </div>
        <div class="ct-btn">
          <button class="heart-bit-neon">Heart Beat </button>
        </div>
      </div>

      <div class="btn-row">
        <div class="ct-btn">
          <button class="border-neon">Border</button>
        </div>
        <div class="ct-btn">
          <button class="inner-height-neon">
            <span class="bg-height"></span>
            <span class="btn-text">Inner Height</span>
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
            <button class="gradient-neon">Gradient Tri</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Neon;
