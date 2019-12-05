import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import { Grid } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import CreateIcon from '@material-ui/icons/Create';
// core components
import HeaderNav from 'layouts/Header/HeaderNav';
import Footer from 'layouts/Footer/Footer';
import Button from 'shared/Components/Button';
import NavPills from 'shared/Components/NavPills';
import Parallax from 'shared/Components/Parallax';

import styles from 'shared/Styles/introduceStyle';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
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
                      src={require('shared/Img/logo192.png')}
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Nguyen Dung</h3>
                    <b>
                      <h4>DESIGNER</h4>
                    </b>
                    <Button justIcon link className={classes.margin5}>
                      <i className="fas fa-star" />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className="fas fa-star" />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className="fas fa-star" />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className="fas fa-star" />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className="fas fa-star" />
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{' '}
              </p>
            </div>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: 'Khóa Học',
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
                      tabButton: 'Kỹ Năng',
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
      <Footer />
    </div>
  );
}
