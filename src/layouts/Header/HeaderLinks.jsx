import React from 'react';
import * as UserActions from 'reduxs/reducers/User/action';
import { useSelector, useDispatch } from 'react-redux';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chat from 'shared/Components/Chat/Chat';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';
// @material-ui/icons
// core components
import history from 'historyConfig';
import CustomDropdown from 'shared/Components/CustomDropdown';
import Button from 'shared/Components/Button';
import styles from 'shared/Styles/headerLinksStyle';
import image from 'shared/Img/logo192.png';
import { Grid, Divider, Dialog, DialogContent } from '@material-ui/core';

const useStyles = makeStyles(styles);

let sv = null;
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dataMess = [];
  // let talk = null;

  // socket.emit('init', username);
  // if (role === 1) {
  //   socket.on('chat', response => {
  //     const { id, sender } = response;
  //     if (talk !== id) {
  //       talk = id;
  //       sv = sender;
  //       dataMess.push(
  //         <div onClick={handleClickOpen}>
  //           <Grid container>
  //             <Grid item xs={12} sm={12} md={12}>
  //               <p>{sender} đã gửi bạn một tin nhắn</p>
  //             </Grid>
  //             <Grid item xs={12} sm={12} md={12}>
  //               <Divider className={classes.divider} />
  //             </Grid>
  //           </Grid>
  //         </div>
  //       );
  //     }
  //   });
  // }

  const dataNoti = [];
  if (notification) {
    notification.map(item => {
      if (item.status === 1) {
        return dataNoti.push(
          <div
            onClick={() => {
              dispatch(UserActions.GetDetailDeal(item.contract_id));
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <p>{item.description}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <p>{moment(item.create_time * 1000).format('DD/MM/YYYY')}</p>
                <Divider className={classes.divider} />
              </Grid>
            </Grid>
          </div>
        );
      }
      return null;
    });
  }

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
    <>
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
            <ListItem
              className={classes.listItem}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
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
                  dropdownList={dataMess}
                />
              </Tooltip>
            </ListItem>
            <ListItem
              style={{ display: 'flex', justifyContent: 'flex-end' }}
              className={classes.listItem}
            >
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
                  dropdownList={dataNoti}
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
                      avatar
                        ? `https://wusbeuser.herokuapp.com/${avatar}`
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
                            <i
                              className={`${classes.socialIcons} fas fa-cogs`}
                            />
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
                    : role === 2
                    ? dataUser.concat([
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
                    : [
                        <div className={classes.dropdownLink}>
                          <div>
                            <a
                              href="http://ubertutoradmin.tk"
                              style={{ textDecoration: 'none' }}
                            >
                              <i
                                className={`${classes.socialIcons} fas fa-info-circle`}
                              />
                              Admin
                            </a>
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
                      ]
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
          </>
        )}
      </List>
      <Dialog
        style={{ minHeight: '500px', minWidth: '450px' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ minHeight: '450px', minWidth: '450px' }}>
          <Chat
            tutorName={username}
            tuteeName={sv}
            senderName={username}
            receiverName={sv}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
