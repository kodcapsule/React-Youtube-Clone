import React from "react";
import "./sidemenu.css";

import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { MdVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { RiVideoFill } from "react-icons/ri";
import { BsFillClockFill } from "react-icons/bs";
import { MdThumbUp } from "react-icons/md";

const SideMenu = () => {
  return (
    <aside>
      <div className="aside__items ">
        <div className="aside_item active ">
          <AiFillHome /> <span>Home</span>
        </div>
        <div className="aside_item">
          <RiMovie2Fill /> <span>Inshots</span>
        </div>
        <div className="aside_item">
          <MdSubscriptions /> <span>Subscriptions</span>
        </div>
      </div>
      {/* ============================================================= */}

      <div className="aside__items ">
        <div className="aside_item active ">
          <MdVideoLibrary /> <span>library</span>
        </div>
        <div className="aside_item">
          <GrHistory /> <span>History</span>
        </div>
        <div className="aside_item">
          <RiVideoFill /> <span>Your Videos</span>
        </div>
        <div className="aside_item">
          <BsFillClockFill /> <span>Watch Later </span>
        </div>
        <div className="aside_item">
          <MdThumbUp /> <span>Likes </span>
        </div>
      </div>
      {/* ============================================================= */}

      <div className="aside__items ">
        <div className="aside_item active ">
          <MdVideoLibrary /> <span>library</span>
        </div>
        <div className="aside_item">
          <GrHistory /> <span>History</span>
        </div>
        <div className="aside_item">
          <RiVideoFill /> <span>Your Videos</span>
        </div>
        <div className="aside_item">
          <BsFillClockFill /> <span>Watch Later </span>
        </div>
        <div className="aside_item">
          <MdThumbUp /> <span>Likes </span>
        </div>
      </div>

      <div className="aside__items ">
        <div className="aside_item active ">
          <MdVideoLibrary /> <span>library</span>
        </div>
        <div className="aside_item">
          <GrHistory /> <span>History</span>
        </div>
        <div className="aside_item">
          <RiVideoFill /> <span>Your Videos</span>
        </div>
        <div className="aside_item">
          <BsFillClockFill /> <span>Watch Later </span>
        </div>
        <div className="aside_item">
          <MdThumbUp /> <span>Likes </span>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
