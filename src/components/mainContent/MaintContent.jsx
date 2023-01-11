import React from "react";
import "./maincontent.css";
// import "./Video";
import Video from "./Video";
import CategoryMenu from "./CategoryMenu";

const MaintContent = () => {
  return (
    <div className="mmain__content_container">
      <CategoryMenu />
      <section id="home">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </section>
    </div>
  );
};

export default MaintContent;
