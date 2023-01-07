import React from "react";
import "./sidemenu.css";

import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

const SideMenu = () => {
  return (
    <aside>
      <div className="aside__items ">
        <div className="aside_item">
          <AiFillHome /> <span>Home</span>
        </div>
        <div className="aside_item">
          <RiMovie2Fill /> <span>Inshots</span>
        </div>
        <div className="aside_item">
          <MdSubscriptions /> <span>Subscriptions</span>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
