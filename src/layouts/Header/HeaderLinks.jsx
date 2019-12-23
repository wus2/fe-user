import React from 'react';
import * as UserActions from 'reduxs/reducers/User/action';
import { useSelector, useDispatch } from 'react-redux';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Search from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
// core components
import history from 'historyConfig';
import CustomDropdown from 'shared/Components/CustomDropdown';
import Button from 'shared/Components/Button';
import CustomInput from 'shared/Components/CustomInput';
import styles from 'shared/Styles/headerLinksStyle';
import image from 'shared/Img/logo192.png';
import { Grid, Divider } from '@material-ui/core';

const useStyles = makeStyles(styles);

export default function Temp(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const userState = useSelector(state => state.userState);
  const {
    isSignIn,
    name,
    avatar,
    role,
    socket,
    username,
    notification
  } = userState;

  socket.emit('init', username);
  socket.on('notification', data => {
    console.log(data);
  });

  const dataUser = [
    <div
      onClick={() => {
        dispatch(UserActions.emitRemoveErrorAction());
        history.push('/user/profile');
      }}
      className={classes.dropdownLink}
    >
      <div>
        <i className={`${classes.socialIcons} far fa-address-card`} />
        Update Profile
      </div>
    </div>,
    <div
      onClick={() => {
        dispatch(UserActions.emitRemoveErrorAction());
        history.push('/user/avatar');
      }}
      className={classes.dropdownLink}
    >
      <div>
        <i className={`${classes.socialIcons} far fa-user-circle`} />
        Update Avatar
      </div>
    </div>,
    <div
      onClick={() => {
        dispatch(UserActions.emitRemoveErrorAction());
        history.push('/user/password');
      }}
      className={classes.dropdownLink}
    >
      <div>
        <i className={`${classes.socialIcons} fas fa-key`} />
        Update Password
      </div>
    </div>
  ];

  return (
    <List
      style={{
        minWidth: '200px',
        display: 'flex',
        justifyContent: 'space-around'
      }}
      className={classes.list}
    >
      {isSignIn ? (
        <>
          <ListItem className={classes.listItem}>
            <Tooltip
              id="messages"
              title="messages"
              placement={window.innerWidth > 959 ? 'top' : 'left'}
              classes={{ tooltip: classes.tooltip }}
            >
              <CustomDropdown
                left
                caret={false}
                hoverColor="black"
                buttonText={
                  <i className={`${classes.socialIcons} fas fa-comments`} />
                }
                buttonProps={{
                  className: `${classes.navLink} ${classes.imageDropdownButton}`,
                  color: 'transparent'
                }}
                dropdownList={[]}
              />
            </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Tooltip
              id="notices"
              title="notices"
              placement={window.innerWidth > 959 ? 'top' : 'left'}
              classes={{ tooltip: classes.tooltip }}
            >
              <CustomDropdown
                left
                caret={false}
                hoverColor="black"
                buttonText={
                  <i
                    className={`${classes.socialIcons} fas fa-exclamation-circle`}
                  />
                }
                buttonProps={{
                  className: `${classes.navLink} ${classes.imageDropdownButton}`,
                  color: 'transparent'
                }}
                dropdownList={[
                  <div>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={12}>
                        <p>Da co mot thong bao</p>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <p>{Date()}</p>
                        <Divider className={classes.divider} />
                      </Grid>
                    </Grid>
                  </div>,
                  <div>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={12}>
                        <p>Da co mot thong bao</p>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <p>{Date()}</p>
                        <Divider className={classes.divider} />
                      </Grid>
                    </Grid>
                  </div>
                ]}
              />
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
                    avatar ? `https://wusbeuser.herokuapp.com${avatar}` : image
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
                role === 1
                  ? dataUser.concat([
                      <div
                        onClick={() => {
                          dispatch(UserActions.emitRemoveErrorAction());
                          history.push('/tutor/skills');
                        }}
                        className={classes.dropdownLink}
                      >
                        <div>
                          <i className={`${classes.socialIcons} fas fa-cogs`} />
                          Update Skills
                        </div>
                      </div>,
                      <div
                        onClick={() => {
                          dispatch(UserActions.emitRemoveErrorAction());
                          history.push('/tutor/updateintroduce');
                        }}
                        className={classes.dropdownLink}
                      >
                        <div>
                          <i
                            className={`${classes.socialIcons} fas fa-info-circle`}
                          />
                          Update Introduce
                        </div>
                      </div>,
                      <div
                        className={classes.dropdownLink}
                        onClick={() => dispatch(UserActions.SignOut())}
                      >
                        <div>
                          <i
                            className={`${classes.socialIcons} fas fa-sign-out-alt`}
                          />
                          Sign Out
                        </div>
                      </div>
                    ])
                  : dataUser.concat([
                      <div
                        className={classes.dropdownLink}
                        onClick={() => dispatch(UserActions.SignOut())}
                      >
                        <div>
                          <i
                            className={`${classes.socialIcons} fas fa-sign-out-alt`}
                          />
                          Sign Out
                        </div>
                      </div>
                    ])
              }
            />
          </ListItem>
        </>
      ) : (
        <>
          <ListItem className={classes.listItem}>
            <div
              onClick={() => {
                dispatch(UserActions.emitRemoveErrorAction());
                history.push('/user/register');
              }}
            >
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <i className={`${classes.socialIcons} fas fa-registered`} />
                Sign Up
              </Button>
            </div>
          </ListItem>
          <ListItem className={classes.listItem}>
            <div
              onClick={() => {
                dispatch(UserActions.emitRemoveErrorAction());
                history.push('/user/login');
              }}
            >
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <i className={`${classes.socialIcons} fas fa-sign-in-alt`} />{' '}
                Sign In
              </Button>
            </div>
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
                href="https://wusbeuser.herokuapp.com/user/auth/facebook"
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
                href="https://wusbeuser.herokuapp.com/user/auth/google"
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
