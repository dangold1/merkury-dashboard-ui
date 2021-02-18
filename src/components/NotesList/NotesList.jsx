import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  noteHeader: {
    paddingBottom:5,
    fontWeight: 'bold',
  },
  inline: {
    display: 'inline',
  },
}));

const NotesList = () => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="subheader"
      className={classes.root}
    >
      <ListItem alignItems="flex-start">
        <ListItemText primary={<Typography className={classes.noteHeader} id="subheader" cl>Tasks</Typography>}/>
      </ListItem>
      <Divider component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={"I'll be in your neighborhood doing errands this…"}
        />
      </ListItem>
      <Divider component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={" — Wish I could come, but I'm out of town this…"}
        />
      </ListItem>
      <Divider component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default NotesList;