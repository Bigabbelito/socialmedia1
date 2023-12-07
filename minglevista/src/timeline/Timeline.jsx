import React from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Posts from "./posts/Posts";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__post">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
