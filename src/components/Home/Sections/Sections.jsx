import React from "react";
import "./Sections.css";
import sectionBanner1 from "../../../assets/images/section-banner1.jpg";
import sectionBanner2 from "../../../assets/images/section-banner2.webp";
import sectionBanner3 from "../../../assets/images/section-banner3.webp";
import sectionBanner4 from "../../../assets/images/section-banner4.webp";
import sectionBanner5 from "../../../assets/images/section-banner5.jpg";
import sectionBanner6 from "../../../assets/images/section-banner-6.jpg";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

function Sections() {
  return (
    <div className="section__container">
      <h1 className="section__title">New Release</h1>
      <div className="section__card_row">
        <div className="section__card">
          <img src={sectionBanner1} alt="" />
          {/* <div className="section__card_actions">
            <div className="card__actions">
              <PlayCircleFilledIcon />
              <AddCircleOutlineIcon />
              <ThumbUpIcon />
              <ThumbDownAltIcon />
            </div>
          </div> */}
        </div>
        <div className="section__card">
          <img src={sectionBanner2} alt="" />
        </div>
        <div className="section__card">
          <img src={sectionBanner3} alt="" />
        </div>
        <div className="section__card">
          <img src={sectionBanner4} alt="" />
        </div>
        <div className="section__card">
          <img src={sectionBanner5} alt="" />
        </div>
        <div className="section__card">
          <img src={sectionBanner6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sections;
