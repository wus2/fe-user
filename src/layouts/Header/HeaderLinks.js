/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
import { Apps } from '@material-ui/icons';
import { LinkContainer } from 'react-router-bootstrap';

import AccountBoxIcon from '@material-ui/icons/AccountBox';

// core components
import CustomDropdown from 'shared/Components/CustomDropdown';
import Button from 'shared/Components/Button.js';

import styles from 'shared/Styles/headerLinksStyle';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <LinkContainer to="/user/signup">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fas fa-registered'} /> Sign Up
          </Button>
        </LinkContainer>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkContainer to="/user/signin">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i class={classes.socialIcons + ' fas fa-sign-in-alt'}></i> Sign In
          </Button>
        </LinkContainer>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="facebook-tooltip"
          title="Login facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="google-tooltip"
          title="Login google"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-google'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
