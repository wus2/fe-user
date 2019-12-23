import React from 'react';
import { useSelector } from 'react-redux';
import history from 'historyConfig';
// nodejs library that concatenates classes
import moment from 'moment';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import { Grid, Divider } from '@material-ui/core';
import Button from 'shared/Components/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
// core components
import SnackbarContent from 'shared/Components/SnackbarContent';
import Parallax from 'shared/Components/Parallax';
import Star from 'shared/Components/Star';
import image from 'shared/Img/logo192.png';

import styles from 'shared/Styles/introduceStyle';

const useStyles = makeStyles(styles);

export default function Introduce(props) {
  const classes = useStyles();
  const userState = useSelector(state => state.userState);
  const { tutor, errors, isSignIn } = userState;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
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
                              ? `https://wusbeuser.herokuapp.com${tutor.avatar}`
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
                        <Star star={tutor.num_rate} />
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
                      <Divider className={classes.divider} />
                      <div>
                        <b>
                          <h4>Đánh Giá</h4>
                        </b>
                      </div>
                    </div>
                  </Grid>
                  {isSignIn ? (
                    <>
                      <Divider className={classes.divider} />
                      <Button
                        onClick={() => {
                          history.push(`/user/deal/${tutor.id}`);
                        }}
                        size="sm"
                        color="primary"
                      >
                        Giao Dịch
                      </Button>
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
