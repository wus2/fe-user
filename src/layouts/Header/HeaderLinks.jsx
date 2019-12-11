import React from 'react';
import * as UserHandler from 'reduxs/handlers/UserHandler';
import * as UserActions from 'reduxs/reducers/User/action';
import { useSelector, useDispatch } from 'react-redux';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Search from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
import { LinkContainer } from 'react-router-bootstrap';
// core components
import CustomDropdown from 'shared/Components/CustomDropdown';
import Button from 'shared/Components/Button';
import CustomInput from 'shared/Components/CustomInput';
import styles from 'shared/Styles/headerLinksStyle';
import image from 'shared/Img/logo192.png';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userState = useSelector(state => state.userState);
  const { isSignIn, name } = userState;

  if (!isSignIn && window.localStorage.getItem('token') !== null) {
    dispatch(UserActions.GetProfile());
  }

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
                <i className={`${classes.socialIcons} fas fa-comments`} />
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
                  className={`${classes.socialIcons} fas fa-exclamation-circle`}
                />
              </Button>
            </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              left
              caret={false}
              hoverColor="black"
              dropdownHeader={`Hi, ${name}`}
              buttonText={
                <img
                  src={
                    userState.user.avatar
                      ? `https://wusbeuser.herokuapp.com${userState.user.avatar}`
                      : image
                  }
                  className={classes.img}
                  alt="profile"
                />
              }
              buttonProps={{
                className: `${classes.navLink} ${classes.imageDropdownButton}`,
                color: 'transparent'
              }}
              dropdownList={
                userState.user.role === 1
                  ? [
                      <LinkContainer
                        to="/users/profile"
                        className={classes.dropdownLink}
                      >
                        <div>
                          <i
                            className={`${classes.socialIcons} far fa-address-card`}
                          />
                          Update Profile
                        </div>
                      </LinkContainer>,
                      <LinkContainer
                        to="/users/avatar"
                        className={classes.dropdownLink}
                      >
                        <div>
                          <i
                            className={`${classes.socialIcons} far fa-user-circle`}
                          />
                          Update Avatar
                        </div>
                      </LinkContainer>,
                      <LinkContainer
                        to="/users/password"
                        className={classes.dropdownLink}
                      >
                        <div>
                          <i className={`${classes.socialIcons} fas fa-key`} />
                          Update Password
                        </div>
                      </LinkContainer>,
                      <LinkContainer
                        to="/tutor/skills"
                        className={classes.dropdownLink}
                      >
                        <div>
                          <i className={`${classes.socialIcons} fas fa-cogs`} />
                          Update Skills
                        </div>
                      </LinkContainer>,
                      <LinkContainer
                        to="/tutor/updateintroduce"
                        className={classes.dropdownLink}
                      >
                        <div>
                          <i
                            className={`${classes.socialIcons} fas fa-info-circle`}
                          />
                          Update Introduce
                        </div>
                      </LinkContainer>,
                      <LinkContainer
                        to="/"
                        className={classes.dropdownLink}
                        onClick={() => dispatch(UserActions.SignOut())}
                      >
                        <div>
                          <i
                            className={`${classes.socialIcons} fas fa-sign-out-alt`}
                          />
                          Sign Out
                        </div>
                      </LinkContainer>
                    ]
                  : [
                      <LinkContainer
                        to="/users/profile"
                        className={classes.dropdownLink}
                      >
                        <div>
                          <i
                            className={`${classes.socialIcons} far fa-address-card`}
                          />
                          Update Profile
                        </div>
                      </LinkContainer>,
                      <LinkContainer
                        to="/users/avatar"
                        className={classes.dropdownLink}
                      >
                        <div>
                          <i
                            className={`${classes.socialIcons} far fa-user-circle`}
                          />
                          Update Avatar
                        </div>
                      </LinkContainer>,
                      <LinkContainer
                        to="/users/password"
                        className={classes.dropdownLink}
                      >
                        <div>
                          <i className={`${classes.socialIcons} fas fa-key`} />
                          Update Password
                        </div>
                      </LinkContainer>,
                      <LinkContainer
                        to="/"
                        className={classes.dropdownLink}
                        onClick={() => dispatch(UserActions.SignOut())}
                      >
                        <div>
                          <i
                            className={`${classes.socialIcons} fas fa-sign-out-alt`}
                          />
                          Sign Out
                        </div>
                      </LinkContainer>
                    ]
              }
            />
          </ListItem>
        </>
      ) : (
        <>
          <ListItem className={classes.listItem}>
            <LinkContainer to="/users/register">
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <i className={`${classes.socialIcons} fas fa-registered`} />
                Sign Up
              </Button>
            </LinkContainer>
          </ListItem>
          <ListItem className={classes.listItem}>
            <LinkContainer to="/users/login">
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <i className={`${classes.socialIcons} fas fa-sign-in-alt`} />{' '}
                Sign In
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
                href="https://wusbeuser.herokuapp.com/users/auth/facebook"
                className={classes.navLink}
              >
                <i className={`${classes.socialIcons} fab fa-facebook`} />
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
                href="https://wusbeuser.herokuapp.com/users/auth/google"
                className={classes.navLink}
              >
                <i className={`${classes.socialIcons} fab fa-google`} />
              </Button>
            </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CustomInput
                white
                inputRootCustomClasses={classes.inputRootCustomClasses}
                formControlProps={{
                  className: classes.formControlNav
                }}
                inputProps={{
                  placeholder: 'Search',
                  inputProps: {
                    'aria-label': 'Search',
                    className: classes.searchInput
                  }
                }}
              />
              <Button justIcon round color="white">
                <Search className={classes.searchIcon} />
              </Button>
            </div>
          </ListItem>
        </>
      )}
    </List>
  );
}
