import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "./MenuListItems.css";

const MenuListItems = ({ isOpen }) => {
  const history = useHistory();
  const [currentPath, setCurrentPath] = useState(history.location.pathname);
  history.listen((location) => setCurrentPath(location.pathname));

  return (
    <div className="menu-list">
      <Link className={clsx("link", currentPath === "/" && "selected")} to="/">
        <li button className="item">
          <HomeOutlinedIcon className="icon-margin" color="primary" />
          {isOpen ? "Home" : ""}
        </li>
      </Link>
      <hr className="items-hr" />

      <Link
        className={clsx("link", currentPath === "/workflow" && "selected")}
        to="/workflow"
      >
        <li button className="item">
          <ViewAgendaOutlinedIcon className="icon-margin" color="primary" />
          {isOpen ? "Workflow" : ""}
        </li>
      </Link>
      <hr className="items-hr" />

      <Link
        className={clsx("link", currentPath === "/statistics" && "selected")}
        to="/statistics"
      >
        <li button className="item">
          <TrendingUpOutlinedIcon className="icon-margin" color="primary" />
          {isOpen ? "Statistics" : ""}
        </li>
      </Link>
      <hr className="items-hr" />

      <Link
        className={clsx("link", currentPath === "/calendar" && "selected")}
        to="/calendar"
      >
        <li button className="item">
          <DateRangeOutlinedIcon className="icon-margin" color="primary" />
          {isOpen ? "Calendar" : ""}
        </li>
      </Link>
      <hr className="items-hr" />

      <Link
        className={clsx("link", currentPath === "/users" && "selected")}
        to="/users"
      >
        <li button className="item">
          <PersonOutlineOutlinedIcon className="icon-margin" color="primary" />
          {isOpen ? "Users" : ""}
        </li>
      </Link>
      <hr className="items-hr" />

      <Link
        className={clsx("link", currentPath === "/settings" && "selected")}
        to="/settings"
      >
        <li button className="item">
          <SettingsOutlinedIcon className="icon-margin" color="primary" />
          {isOpen ? "Settings" : ""}
        </li>
      </Link>
      <hr className="items-hr" />
    </div>
  );
};

export default MenuListItems;
