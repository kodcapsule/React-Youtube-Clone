import React from "react";
import Avatar from "../../Avatar";

const Video = () => {
  return (
    <article>
      <div className="image_container">
        <img src="" alt="" />
      </div>
      <div className="content">
        <Avatar />{" "}
        <div className="video_details">
          <h4 className="video_title">How to create a virtual Environment</h4>
          <h5 className="chanel_name">KodCapsule</h5>
          <p>
            <span className="views">12k views</span> <small>2 days ago</small>{" "}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Video;
