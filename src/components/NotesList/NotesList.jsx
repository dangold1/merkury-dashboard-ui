import React, { Fragment, useState, useEffect } from "react";
import "./NotesList.css";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ReplyIcon from "@material-ui/icons/Reply";
import SettingsIcon from "@material-ui/icons/Settings";
import clsx from "clsx";
import {
  getTimeTextByDate,
  getIsTimePassed,
} from "../../services/date.service";
import { Badge, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    backgroundColor: theme.palette.background.paper,
  },
  listHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  noteHeader: {
    padding: 0,
    fontWeight: "bold",
  },
  unread: {
    backgroundColor: "#f4f5f8",
  },
  inline: {
    display: "inline",
  },
}));

const TYPE_TASK = "task";
const TYPE_MESSAGES = "messages";
const TYPE_ACTIVITY = "activity";

const NotesList = (props) => {
  const {
    data,
    isMessage,
    isDisplayTimeIcon,
    isDelay,
    isHideContextMenu,
    isHideButtons,
    isDateNextToName,
    isActivity,
    type,
  } = props;
  const classes = useStyles();

  const [notifactions, setNotifactions] = useState([]);

  useEffect(() => {
    setNoteNotifactions();
  }, [type]);

  const setNoteNotifactions = () => {
    switch (type.toLowerCase()) {
      case TYPE_TASK:
        setNotifactions([5, 2]);
        break;
      case TYPE_MESSAGES:
        setNotifactions([2]);
        break;
      case TYPE_ACTIVITY:
        setNotifactions([10]);
        break;
      default:
        throw new Error("Unknown Type");
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="subheader"
      className={clsx(classes.root, "notes-list")}
    >
      <ListItem>
        <ListItemText
          primary={
            <div className={classes.listHeader}>
              <Typography className={classes.noteHeader} id="subheader">
                {type}
              </Typography>
              <div className={classes.noteBadges}>
                <IconButton color="inherit">
                  <Badge badgeContent={notifactions[0]} color="primary"></Badge>
                </IconButton>
                {notifactions.length > 1 && (
                  <IconButton color="inherit">
                    <Badge
                      badgeContent={notifactions[1]}
                      color="secondary"
                    ></Badge>
                  </IconButton>
                )}
              </div>
            </div>
          }
        />
      </ListItem>
      <Divider component="li" />
      <div className="notes">
        {data.map((item, index) => {
          const { user, title, content, author, date, action, task } = item;
          const username = user?.name ?? "No user Found";
          const userImage = user?.image || "/static/images/avatar/1.jpg";
          const dateText = getTimeTextByDate(date);
          const isTimePassed = getIsTimePassed(date);

          return (
            <Fragment key={index}>
              <ListItem
                className={
                  type.toLowerCase() === TYPE_MESSAGES && index < 2
                    ? classes.unread
                    : ""
                }
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar alt={username} src={userImage} />
                </ListItemAvatar>

                <div className="note-content">
                  <ListItemText
                    primary={
                      <span className="title-list-item-text">
                        {isActivity ? (
                          <span>
                            {author}{" "}
                            <span
                              style={{
                                color: "#8492af",
                                fontSize: 11,
                                fontWeight: "normal",
                              }}
                            >
                              {action}
                            </span>{" "}
                            {task}
                          </span>
                        ) : isMessage ? (
                          author
                        ) : (
                          <span style={{ fontSize: 15 }}>{title}</span>
                        )}
                        {isDateNextToName && (
                          <span
                            className={`display-date ${
                              isDelay && !isTimePassed ? "time-delayed" : ""
                            }`}
                            style={{
                              marginLeft: 8,
                              color: "#96a2ba",
                              fontSize: 13,
                              fontWeight: "normal",
                            }}
                          >
                            {isDisplayTimeIcon && (
                              <AccessTimeIcon className="time-icon" />
                            )}
                            <span>{dateText}</span>
                          </span>
                        )}
                      </span>
                    }
                    secondary={<p className="content">{content}</p>}
                  />

                  {!isDateNextToName && (
                    <div
                      className={`display-date ${
                        isDelay && !isTimePassed ? "time-delayed" : ""
                      }`}
                    >
                      {isDisplayTimeIcon && (
                        <AccessTimeIcon className="time-icon" />
                      )}
                      <span>{dateText}</span>
                    </div>
                  )}

                  {!isHideButtons && (
                    <div className="actions-btn">
                      <ReplyIcon className="action-btn" />
                      <SettingsIcon className="action-btn" />
                    </div>
                  )}
                </div>

                {!isHideContextMenu && (
                  <MoreVertIcon className="context-menu" />
                )}
              </ListItem>
              {index !== data.length - 1 && <Divider component="li" />}
            </Fragment>
          );
        })}
      </div>
    </List>
  );
};

NotesList.defaultProps = {
  data: [],
  isDelay: false,
  isHideButtons: true,
  isHideContextMenu: false,
  isDateNextToName: false,
  isMessage: false,
  isDisplayTimeIcon: false,
  isActivity: false,
};

export default NotesList;
