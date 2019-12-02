/*eslint-disable*/
import React from 'react';
import { useSelector } from 'react-redux';
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
import image from 'logo192.png';
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const userState = useSelector(state => state.userState);
  const { isSignIn } = userState;
  return (
    <List className={classes.list}>
      {isSignIn ? (
        <>
          <ListItem className={classes.listItem}>
            <Tooltip
              id="messages"
              title="messages"
              placement={window.innerWidth > 959 ? 'top' : 'left'}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <i className={classes.socialIcons + ' fas fa-comments'} />
              </Button>
            </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Tooltip
              id="notices"
              title="notices"
              placement={window.innerWidth > 959 ? 'top' : 'left'}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <i
                  className={classes.socialIcons + ' fas fa-exclamation-circle'}
                />
              </Button>
            </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              left
              caret={false}
              hoverColor="black"
              dropdownHeader="Nguyen Dung"
              buttonText={
                <img src={image} className={classes.img} alt="profile" />
              }
              buttonProps={{
                className: classes.navLink + ' ' + classes.imageDropdownButton,
                color: 'transparent'
              }}
              dropdownList={['Thông tin cá nhân', 'Đổi mật khẩu', 'Đăng xuất']}
            />
          </ListItem>
        </>
      ) : (
        <>
          <ListItem className={classes.listItem}>
            <LinkContainer to="/user/signup">
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <i className={classes.socialIcons + ' fas fa-registered'} />{' '}
                Sign Up
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
                <i class={classes.socialIcons + ' fas fa-sign-in-alt'}></i> Sign
                In
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
        </>
      )}
    </List>
  );
}
