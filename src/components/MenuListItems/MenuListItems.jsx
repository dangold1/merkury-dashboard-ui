import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import clsx from 'clsx';
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import './MenuListItems.css';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: "white",
    },
    activeItem: {
        '&:hover': {
            backgroundColor: "#122143",
            borderLeft: "6px solid #5584ff !important",
        },
    },
    selected: {
        // backgroundColor: "#122143",
        borderLeft: "6px solid #5584ff !important",
    }
}));


const MenuListItems = () => {
    const classes = useStyles();
    const history = useHistory()
    const [currentPath, setCurrentPath] = useState(history.location.pathname)    
    history.listen((location) => setCurrentPath(location.pathname));

    return (
        <List>
            <Link className={classes.link} to="/" >
                <MenuItem button className={clsx(classes.activeItem, currentPath === '/' ? classes.selected : null)}>
                    <ListItemIcon>
                        <HomeOutlinedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </MenuItem>
            </Link>
            <Divider />

            <Link className={classes.link} to="/workflow">
                <MenuItem button className={clsx(classes.activeItem, currentPath === '/workflow' ? classes.selected : null)}>
                    <ListItemIcon>
                        <ViewAgendaOutlinedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Workflow" />
                </MenuItem>
            </Link>
            <Divider />

            <Link className={classes.link} to="/statistics">
                <MenuItem button className={clsx(classes.activeItem, currentPath === '/statistics' ? classes.selected : null)}>
                    <ListItemIcon>
                        <TrendingUpOutlinedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Statistics" />
                </MenuItem>
            </Link>
            <Divider />

            <Link className={classes.link} to="/calendar">
                <MenuItem button className={clsx(classes.activeItem, currentPath === '/calendar' ? classes.selected : null)}>
                    <ListItemIcon>
                        <DateRangeOutlinedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Calendar" />
                </MenuItem>
            </Link>
            <Divider />

            <Link className={classes.link} to="/users">
                <MenuItem button className={clsx(classes.activeItem, currentPath === '/users' ? classes.selected : null)}>
                    <ListItemIcon>
                        <PersonOutlineOutlinedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </MenuItem>
            </Link>
            <Divider />

            <Link className={classes.link} to="/settings">
                <MenuItem button className={clsx(classes.activeItem, currentPath === '/settings' ? classes.selected : null)}>
                    <ListItemIcon>
                        <SettingsOutlinedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </MenuItem>
            </Link>
            <Divider />
        </List >
    );
}

export default MenuListItems;