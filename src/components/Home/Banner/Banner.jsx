import React from "react";
import "./Banner.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons/Info";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Fight Club</h1>
        <p className="banner__overview">
          A ticking-time-bomb insomniac and a slippery soap salesman channel
          primal male aggression into a shocking new form of therapy. Their
          concept catches on, with underground "fight clubs" forming in every
          town, until an eccentric gets in the way and ignites an out-of-control
          spiral toward oblivion.
        </p>
        <div className="banner__buttons">
          <button className="banner__button_play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="banner__button_info">
            <InfoIcon />
            <span>More Info</span>
          </button>
        </div>
      </div>
      <div className="banner__bottom_fade"></div>
    </div>
  );
}

export default Banner;
