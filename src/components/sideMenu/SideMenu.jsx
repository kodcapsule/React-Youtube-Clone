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
      <div className="main__aside__items">
        <div className="aside__items ">
          <a href="#home" className="aside_item active ">
            <AiFillHome className="icon" /> <span>Home</span>
          </a>

          <a href="#inshots" className="aside_item">
            <RiMovie2Fill className="icon" /> <span>Inshots</span>
          </a>
          <a href="#subscriptions" className="aside_item">
            <MdSubscriptions className="icon" /> <span>Subscriptions</span>
          </a>
        </div>
        {/* ============================================================= */}

        <div className="aside__items ">
          <a href="#library" className="aside_item  ">
            <MdVideoLibrary className="icon" /> <span>library</span>
          </a>
          <a href="#history" className="aside_item">
            <GrHistory className="icon" /> <span>History</span>
          </a>
          <a href="#yourvideos" className="aside_item">
            <RiVideoFill className="icon" /> <span>Your Videos</span>
          </a>
          <a href="#watchlater" className="aside_item">
            <BsFillClockFill className="icon" /> <span>Watch Later </span>
          </a>
          <a href="#likes" className="aside_item">
            <MdThumbUp className="icon" /> <span>Likes </span>
          </a>
        </div>
        {/* ============================================================= */}

        <div className="aside__items ">
          <h3>Subscriptions</h3>
          <a href="#subscrtion1" className="aside_item  ">
            <Avatar /> <span>KodCapsule</span>
          </a>
          <a href="#subscrtion1" className="aside_item">
            <Avatar /> <span>Academy</span>
          </a>
          <a href="#subscrtion1" className="aside_item">
            <Avatar /> <span>Travesy</span>
          </a>
          <a href="#subscrtion1" className="aside_item">
            <Avatar /> <span>freecod</span>
          </a>
          <a href="#subscrtion1" className="aside_item">
            <Avatar /> <span>KodCapsule</span>
          </a>
        </div>
        {/* ============================================================= */}
        <div className="aside__items ">
          <h3>Explore</h3>
          <a href="#trending" className="aside_item active">
            <HiFire className="icon" /> <span>trending</span>
          </a>
          <a href="#Music" className="aside_item">
            <IoMdMusicalNote className="icon" /> <span>Music</span>
          </a>
          <a href="#Gaming" className="aside_item">
            <SiYoutubegaming className="icon" /> <span>Gaming</span>
          </a>
          <a href="#sports" className="aside_item">
            <BsFillTrophyFill className="icon" /> <span>Sports </span>
          </a>
        </div>

        <div className="aside__items ">
          <h4>Lorem ipsu</h4>
        </div>
      </div>

      <div className="main__aside">
        <div className="aside__items ">
          <a href="#home" className="aside_item active flex__cloumn">
            <AiFillHome className="icon" /> <span>Home</span>
          </a>

          <a href="#inshots" className="aside_item flex__cloumn">
            <RiMovie2Fill className="icon" /> <span>Inshots</span>
          </a>
          <a href="#subscriptions" className="aside_item flex__cloumn">
            <MdSubscriptions className="icon" /> <span>Subscriptions</span>
          </a>
          <a href="#library" className="aside_item flex__cloumn ">
            <MdVideoLibrary className="icon" /> <span>library</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
