import React from "react";
import "./sidemenu.css";

import Avatar from "../../Avatar";

import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { MdVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { RiVideoFill } from "react-icons/ri";
import { BsFillClockFill } from "react-icons/bs";
import { MdThumbUp } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { BsFillTrophyFill } from "react-icons/bs";
import { HiFire } from "react-icons/hi";

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
        <h3>Subscriptions</h3>
        <div className="aside_item  ">
          <Avatar /> <span>library</span>
        </div>
        <div className="aside_item">
          <Avatar /> <span>library</span>
        </div>
        <div className="aside_item">
          <Avatar /> <span>library</span>
        </div>
        <div className="aside_item">
          <Avatar /> <span>library</span>
        </div>
        <div className="aside_item">
          <Avatar /> <span>library</span>
        </div>
      </div>
      {/* ============================================================= */}
      <div className="aside__items ">
        <h3>Explore</h3>
        <div className="aside_item active ">
          <HiFire /> <span>trending</span>
        </div>
        <div className="aside_item">
          <IoMdMusicalNote /> <span>Music</span>
        </div>
        <div className="aside_item">
          <SiYoutubegaming /> <span>Gaming</span>
        </div>
        <div className="aside_item">
          <BsFillTrophyFill /> <span>Sports </span>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
