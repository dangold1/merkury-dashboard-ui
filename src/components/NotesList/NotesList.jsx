import React, { Fragment, useState, useEffect } from "react";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ReplyIcon from "@material-ui/icons/Reply";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  getTimeTextByDate,
  getIsTimePassed,
} from "../../services/date.service";
import { Badge, IconButton } from "@material-ui/core";

import "./NotesList.css";

const TYPE_TASK = "tasks";
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
    isActivity,
    type,
  } = props;

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
    <ul aria-labelledby="subheader" className="notes-list">
      <div className="list-header">
        <p className="header-text" id="subheader">
          {type}
        </p>
        <div className="notes-badges">
          <IconButton color="inherit">
            <Badge badgeContent={notifactions[0]} color="primary" />
          </IconButton>
          {notifactions.length > 1 && (
            <IconButton color="inherit">
              <Badge badgeContent={notifactions[1]} color="secondary"/>
            </IconButton>
          )}
        </div>
      </div>
      <hr />
      <div className="note-content-wrapper">
        {data.map((item, index) => {
          const { user, title, content, author, date, action, task } = item;
          const username = user?.name ?? "No user Found";
          const userImage = user?.image || "/static/images/avatar/1.jpg";
          const dateText = getTimeTextByDate(date);
          const isTimePassed = getIsTimePassed(date);

          return (
            <Fragment key={index}>
              <li
                key={index}
                className={
                  type.toLowerCase() === TYPE_MESSAGES && index < 2 && "unread"
                }
              >
                <div className="note-text-content-box">
                  <div className="title-list-item-text">
                    <Avatar className="avatar" alt={username} src={userImage} />

                    {isActivity ? (
                      <span className="text-center">
                        {`${author} `}
                        <span
                          style={{
                            color: "#8492af",
                            fontSize: 11,
                            fontWeight: "normal",
                          }}
                        >
                          {action}
                        </span>
                        {` ${task}`}
                        {
                          <span
                            className={clsx(
                              "display-date",
                              isDelay && !isTimePassed && "time-delayed"
                            )}
                          >
                            {isDisplayTimeIcon && (
                              <AccessTimeIcon className="time-icon" />
                            )}
                            <span>{dateText}</span>
                          </span>
                        }
                      </span>
                    ) : isMessage ? (
                      <div className="message">
                        {author}
                        <span
                          className={clsx(
                            isDelay && !isTimePassed && "time-delayed"
                          )}
                          style={{
                            marginLeft: 8,
                            color: "#96a2ba",
                            fontSize: 12,
                            fontWeight: "normal",
                          }}
                        >
                          {dateText}
                        </span>
                        <p className="p-center">
                          {content}
                          {!isHideButtons && (
                            <div className="actions-btn">
                              <ReplyIcon className="action-btn" />
                              <SettingsIcon className="action-btn" />
                            </div>
                          )}
                        </p>
                      </div>
                    ) : (
                      <span className="task-content">
                        {title}
                        {
                          <span
                            className={clsx(
                              "display-date",
                              isDelay && !isTimePassed && "time-delayed"
                            )}
                          >
                            {isDisplayTimeIcon && (
                              <AccessTimeIcon className="time-icon" />
                            )}
                            <span>{dateText}</span>
                          </span>
                        }
                      </span>
                    )}
                  </div>
                  {!isMessage && <p className="text-content">{content}</p>}
                  {!isHideContextMenu && (
                    <MoreVertIcon className="context-menu" />
                  )}
                </div>
              </li>
              {index !== data.length - 1 && <hr />}
            </Fragment>
          );
        })}
      </div>
    </ul>
  );
};

NotesList.defaultProps = {
  data: [],
  isDelay: false,
  isHideButtons: true,
  isHideContextMenu: false,
  isMessage: false,
  isDisplayTimeIcon: false,
  isActivity: false,
};

export default NotesList;
