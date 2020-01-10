import React from 'react';
import { useSelector } from 'react-redux';
import history from 'historyConfig';
// nodejs library that concatenates classes
import moment from 'moment';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import { Grid, Divider, Dialog, DialogContent } from '@material-ui/core';
import Button from 'shared/Components/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// core components
import SnackbarContent from 'shared/Components/SnackbarContent';
import Parallax from 'shared/Components/Parallax';
import Star from 'shared/Components/Star';
import image from 'shared/Img/logo192.png';
import Chat from 'shared/Components/Chat/Chat';
import styles from 'shared/Styles/introduceStyle';

const useStyles = makeStyles(styles);

export default function Introduce(props) {
  const classes = useStyles();
  const userState = useSelector(state => state.userState);
  const { tutor, errors, isSignIn, comments, role, user } = userState;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const createData = (name, stars, comment) => {
    return { name, stars, comment };
  };

  const rows = [];
  if (comments) {
    comments.map(item => {
      return rows.push(createData(item.name, item.stars, item.comment));
    });
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Parallax small filter image={require('shared/Img/bg7.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <Grid container justify="center">
              {errors ? (
                <SnackbarContent
                  message={
                    <span>
                      <b>{errors}</b>
                    </span>
                  }
                  close
                  color="danger"
                  icon="info_outline"
                />
              ) : (
                <>
                  <Grid item xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                      <div>
                        <img
                          src={
                            tutor.avatar
                              ? `https://wusbeuser.herokuapp.com/${tutor.avatar}`
                              : image
                          }
                          alt="..."
                          className={imageClasses}
                        />
                      </div>
                      <div>
                        <b>
                          <h4>{tutor.degree}</h4>
                        </b>
                        <Star
                          star={Math.ceil(tutor.num_stars / tutor.num_rate)}
                        />
                      </div>
                      <Divider className={classes.divider} />
                      <div>
                        <b>
                          <h4>THÔNG TIN CHI TIẾT</h4>
                        </b>
                      </div>
                      <div className={classes.description}>
                        <p>
                          <b>Họ tên:</b> {tutor.name}
                        </p>
                      </div>
                      <div className={classes.description}>
                        <p>
                          <b>Địa chỉ:</b> {tutor.address}, {tutor.district}, TP.
                          Hồ Chí Minh
                        </p>
                      </div>
                      <div className={classes.description}>
                        <p>
                          <b>Email:</b> {tutor.email}
                        </p>
                      </div>
                      <div className={classes.description}>
                        <p>
                          <b>Giới tính:</b> {tutor.gender}
                        </p>
                      </div>
                      <div className={classes.description}>
                        <p>
                          <b>Ngày sinh:</b>{' '}
                          {moment(tutor.dob).format('DD-MM-YYYY')}
                        </p>
                      </div>
                      <div className={classes.description}>
                        <p>
                          <b>Liên hệ:</b> {tutor.phone}
                        </p>
                      </div>
                      <div className={classes.description}>
                        <p>
                          <b>Giá tiền(VNĐ/giờ):</b> {tutor.price_per_hour}
                        </p>
                      </div>
                      <div className={classes.description}>
                        <p>
                          <b>Giới thiệu:</b> {tutor.intro_desc}
                        </p>
                      </div>
                      <div className={classes.description}>
                        <p>
                          <List
                            className={classes.flex}
                            component="nav"
                            aria-label="secondary mailbox folder"
                          >
                            {tutor.skill_tags
                              ? tutor.skill_tags.map(item => {
                                  return (
                                    <ListItem className={classes.skilltags}>
                                      {item}
                                    </ListItem>
                                  );
                                })
                              : ''}
                          </List>
                        </p>
                      </div>
                      {comments ? (
                        <>
                          <Divider className={classes.divider} />
                          <div>
                            <b>
                              <h4>Đánh Giá</h4>
                            </b>
                            <div>
                              <Table
                                className={classes.table}
                                aria-label="simple table"
                              >
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Rating</TableCell>
                                    <TableCell align="right">
                                      Comment&nbsp;
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows.map(row => (
                                    <TableRow key={row.name}>
                                      <TableCell component="th" scope="row">
                                        {row.name}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.stars}
                                      </TableCell>
                                      <TableCell align="right">
                                        {row.comment}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </div>
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                  </Grid>
                  {isSignIn && role === 2 ? (
                    <>
                      <Divider className={classes.divider} />
                      <Grid container justify="center">
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          <Button
                            onClick={handleClickOpen}
                            size="sm"
                            color="primary"
                          >
                            Chat
                          </Button>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          <Button
                            onClick={() => {
                              history.push(`/user/deal/${tutor.id}`);
                            }}
                            size="sm"
                            color="primary"
                          >
                            Giao Dịch
                          </Button>
                        </Grid>
                      </Grid>
                      <Dialog
                        style={{ minHeight: '500px', minWidth: '450px' }}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogContent
                          style={{ minHeight: '450px', minWidth: '450px' }}
                        >
                          <Chat
                            tutorName={tutor.username}
                            tuteeName={user.username}
                            senderName={user.username}
                            receiverName={tutor.username}
                          />
                        </DialogContent>
                      </Dialog>
                    </>
                  ) : (
                    ''
                  )}
                </>
              )}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
