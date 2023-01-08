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
          <AiFillHome className="icon" /> <span>Home</span>
        </div>
        <div className="aside_item">
          <RiMovie2Fill className="icon" /> <span>Inshots</span>
        </div>
        <div className="aside_item">
          <MdSubscriptions className="icon" /> <span>Subscriptions</span>
        </div>
      </div>
      {/* ============================================================= */}

      <div className="aside__items ">
        <div className="aside_item  ">
          <MdVideoLibrary className="icon" /> <span>library</span>
        </div>
        <div className="aside_item">
          <GrHistory className="icon" /> <span>History</span>
        </div>
        <div className="aside_item">
          <RiVideoFill className="icon" /> <span>Your Videos</span>
        </div>
        <div className="aside_item">
          <BsFillClockFill className="icon" /> <span>Watch Later </span>
        </div>
        <div className="aside_item">
          <MdThumbUp className="icon" /> <span>Likes </span>
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
          <HiFire className="icon" /> <span>trending</span>
        </div>
        <div className="aside_item">
          <IoMdMusicalNote className="icon" /> <span>Music</span>
        </div>
        <div className="aside_item">
          <SiYoutubegaming className="icon" /> <span>Gaming</span>
        </div>
        <div className="aside_item">
          <BsFillTrophyFill className="icon" /> <span>Sports </span>
        </div>
      </div>

      <div className="aside__items ">
        <h4>Lorem ipsu</h4>
      </div>
    </aside>
  );
};

export default SideMenu;
