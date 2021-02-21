import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import MenuListItems from "../MenuListItems/MenuListItems";
import { Button, Container, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DashboardRoutes from "../../routes/DashboardRoutes";
import "./Dashboard.css";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    margin: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -45,
    marginTop: 4,
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "transparent",
    color: "black",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  avatar: {
    display: "inline-flex",
    "& > *": {
      marginLeft: theme.spacing(1),
    },
  },
  button: {
    borderRadius: 25,
    marginRight: 15,
    textTransform: "unset !important",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: "#0e1a35",
    color: "white",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [open, toggleOpen] = useState(true);

  const toggleDrawerOpen = () => {
    toggleOpen(!open);
  };
  
  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.navigationButtons}>
            <IconButton
              edge="start"
              color={open ? "inherit" : "primary"}
              aria-label="open drawer"
              onClick={toggleDrawerOpen}
            >
              <MenuOpenIcon />
            </IconButton>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </div>

          <div className={classes.actionsButtons}>
            <Button
              className={classes.button}
              variant="contained"
              startIcon={<AddIcon />}
              color="primary"
            >
              Add project
            </Button>
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <div className={classes.avatar}>
              <Avatar alt="John" src="/static/images/avatar/3.jpg" />
              <IconButton color="inherit" className="user-avatar-arrow">
                <ArrowDropDownIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.menuHeader}>
          {open && (
            <Fragment>
              <img src={process.env.PUBLIC_URL +"/images/app-logo.PNG"} />
              <Typography variant="h6" component="h1">
                Merukry
              </Typography>
            </Fragment>
          )}
        </div>
        <MenuListItems />
      </Drawer>

      {/* Content */}
      <div className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <DashboardRoutes />
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
