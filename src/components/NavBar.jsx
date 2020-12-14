import React from "react";
import "./NavBar.css";
import logo from "../assets/images/Netflix_logo.png";
import face1 from "../assets/icons/face-icon1.png";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [show, showHandler] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        showHandler(true);
      } else {
        showHandler(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", showHandler);
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <ul className="navbar__first_child">
        <li>
          <a href="#">
            <img src={logo} alt="Netflix" className="logo" />
          </a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">TV Shows</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">New & Popular</a>
        </li>
        <li>
          <a href="#">My List</a>
        </li>
      </ul>
      <ul className="navbar__second_child"></ul>
      <ul className="navbar__last_child">
        <li>
          <SearchIcon />
        </li>
        <li>
          <a href="#">Children</a>
        </li>
        <li>
          <CardGiftcardIcon />
        </li>
        <li>
          <NotificationsIcon />
        </li>
        <li>
          <img src={face1} alt="" />
        </li>
      </ul>
    </div>
  );
}
