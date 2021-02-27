import React, { useState, Fragment } from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import MenuListItems from "../MenuListItems/MenuListItems";
import AddIcon from "@material-ui/icons/Add";
import DashboardRoutes from "../../routes/DashboardRoutes";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import "./Dashboard.css";

const Dashboard = () => {
  const isMobileMode = useCheckMobileScreen();
  const [open, toggleOpen] = useState(true);

  const toggleDrawerOpen = () => {
    toggleOpen(!open);
  };

  const renderLogo = () => (
    <Fragment>
      <img src={process.env.PUBLIC_URL + "/images/app-logo.PNG"} />
      <h3>Merkury</h3>
    </Fragment>
  );

  const renderDrawerButton = () => (
    <IconButton
      edge="start"
      color={open ? "inherit" : "primary"}
      aria-label="open drawer"
      onClick={toggleDrawerOpen}
      className={open ? "menu-opened-btn" : "menu-closed-btn"}
    >
      <MenuOpenIcon />
    </IconButton>
  );

  const renderAvatar = () => (
    <div className="avatar">
      <Avatar alt="John" src="/static/images/avatar/3.jpg" />
      <IconButton color="inherit" className="user-avatar-arrow">
        <ArrowDropDownIcon />
      </IconButton>
    </div>
  );

  return (
    <div className="dashboard">
      {/* Side Bar */}
      <div className={clsx("drawerpaper", !open && "drawerpaper-close")}>
        <div className="menu-header">
          {open ? renderLogo() : renderDrawerButton()}
        </div>
        <MenuListItems isOpen={open} />
      </div>

      {/* Content */}
      <div className="content-container">
        {/* AppBar */}
        <div className="appBar">
          <div className="toolbar">
            <div className="navigation-buttons">
              {open && renderDrawerButton()}
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
            </div>

            <div className="actions-buttons">
              <button id="add-project-btn">
                <IconButton color="inherit">
                  <AddIcon />
                </IconButton>
                Add project
              </button>
              <IconButton color="inherit">
                <EmailIcon />
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={3} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              {!isMobileMode && renderAvatar()}
            </div>
          </div>
        </div>
        <DashboardRoutes />
      </div>
    </div>
  );
};

export default Dashboard;
