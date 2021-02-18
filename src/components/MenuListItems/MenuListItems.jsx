import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';

const MenuListItems = () => {
    return (
        <List>
            <ListItem button >
                <ListItemIcon>
                    <HomeOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <ViewAgendaOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Workflow" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <TrendingUpOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Statistics" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <DateRangeOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <PersonOutlineOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <SettingsOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
            <Divider />
        </List>
    );
}

export default MenuListItems;