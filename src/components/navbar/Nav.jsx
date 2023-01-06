import React from "react";
import Avatar from "../../Avatar";
import "./nav.css";
// Icons
import { FiMenu } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";
import { BsBellFill } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";

const Nav = () => {
  return (
    <nav className="container nav__container">
      <div className="logo__container flex__container">
        <FiMenu className="icon" />
        <IoLogoYoutube className="icon" />
      </div>

      <div className="form__container flex__container">
        <form action="#">
          <input type="text" placeholder="Search..." />
          <RxMagnifyingGlass className="icon" />
        </form>
        <FaMicrophone className="icon" />
      </div>

      <div className="user__details_container flex__container">
        <RiVideoAddFill className="icon" />
        <BsBellFill className="icon" />
        <Avatar />
      </div>
    </nav>
  );
};

export default Nav;
