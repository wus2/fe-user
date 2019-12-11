import React from 'react';
import { useSelector } from 'react-redux';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import { Grid, Divider } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import CreateIcon from '@material-ui/icons/Create';
// core components
import HeaderNav from 'layouts/Header/HeaderNav';
import Footer from 'layouts/Footer/Footer';
import NavPills from 'shared/Components/NavPills';
import Parallax from 'shared/Components/Parallax';
import Star from 'shared/Components/Star';
import image from 'shared/Img/logo192.png';

import styles from 'shared/Styles/introduceStyle';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const userState = useSelector(state => state.userState);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <HeaderNav />
      <Parallax small filter image={require('shared/Img/bg7.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={
                        userState.user.avatar
                          ? `https://wusbeuser.herokuapp.com${userState.user.avatar}`
                          : image
                      }
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{userState.user.name}</h3>
                    <b>
                      <h4>DESIGNER</h4>
                    </b>
                    <Star star={userState.user.rate} />
                  </div>
                  <Divider className={classes.divider} />
                  <div className={classes.name}>
                    <h3 className={classes.title}>{userState.user.name}</h3>
                    <b>
                      <h4>THÔNG TIN CHI TIẾT</h4>
                    </b>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Họ tên:</b> {userState.user.name}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Địa chỉ:</b> {userState.user.address},{' '}
                      {userState.user.district}, TP. Hồ Chí Minh
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Email:</b> {userState.user.email}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Giới tính:</b> {userState.user.gender}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Ngày sinh:</b> {userState.user.dob}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Liên hệ:</b> {userState.user.phone}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Giá tiền(VNĐ/giờ):</b> {userState.user.price}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Giới thiệu:</b> {userState.user.intro_desc}
                    </p>
                  </div>
                </div>
                <Divider className={classes.divider} />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: 'Kỹ Năng',
                      tabIcon: SchoolIcon,
                      tabContent: (
                        <Grid container justify="center">
                          <Grid item xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={require('shared/Img/bg.jpg')}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={require('shared/Img/bg.jpg')}
                              className={navImageClasses}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={require('shared/Img/bg.jpg')}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={require('shared/Img/bg.jpg')}
                              className={navImageClasses}
                            />
                          </Grid>
                        </Grid>
                      )
                    },
                    {
                      tabButton: 'Nhận Xét',
                      tabIcon: CreateIcon,
                      tabContent: (
                        <Grid container justify="center">
                          <Grid item xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={require('shared/Img/bg.jpg')}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={require('shared/Img/bg.jpg')}
                              className={navImageClasses}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={require('shared/Img/bg.jpg')}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={require('shared/Img/bg.jpg')}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={require('shared/Img/bg.jpg')}
                              className={navImageClasses}
                            />
                          </Grid>
                        </Grid>
                      )
                    }
                  ]}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Footer whiteFont />
    </div>
  );
}
