import React from 'react';
import * as UserActions from 'reduxs/reducers/User/action';

import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import history from 'historyConfig';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Grid, Divider } from '@material-ui/core';
import Parallax from 'shared/Components/Parallax';
import Button from 'shared/Components/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Paginations from 'shared/Components/Pagination';
import Star from 'shared/Components/Star';
import image from 'shared/Img/logo192.png';
import styles from 'shared/Styles/components';

const useStyles = makeStyles(styles);
let page = 1;

export default function Home(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userState);
  const { tutors } = userState;

  return (
    <div>
      <Parallax image={require('shared/Img/bg.jpg')}>
        <div className={classes.container}>
          <Grid container spacing={4}>
            <Grid item>
              <div className={classes.brand}>
                <h1 className={classes.title}>UBER TUTOR</h1>
                <h3 className={classes.subtitle}>
                  Nơi hội tụ những con người nhiệt huyết trong sự nghiệp trồng
                  người.
                </h3>
                <h3 className={classes.subtitle}>
                  Chúng tôi chọn bạn! Còn bạn thì sao?
                </h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      {tutors ? (
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.section}>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={8}>
                <h2 className={classes.topic}>Danh Sách Gia Sư</h2>
              </Grid>
              <Divider className={classes.divider} />
            </Grid>
            <div>
              <Grid container style={{ margin: '0px 10px' }}>
                {tutors.map(data => {
                  return (
                    <Grid item xs={12} sm={12} md={3}>
                      <Card
                        style={{ minHeight: '300px' }}
                        className={classes.card}
                      >
                        <CardHeader
                          avatar={
                            <Avatar
                              aria-label="recipe"
                              src={
                                data.avatar
                                  ? `https://wusbeuser.herokuapp.com${data.avatar}`
                                  : image
                              }
                              className={classes.bigAvatar}
                            >
                              Avatar
                            </Avatar>
                          }
                          title={data.name}
                          subheader={data.degree}
                        />

                        <CardContent>
                          <List
                            className={classes.flex}
                            component="nav"
                            aria-label="secondary mailbox folder"
                          >
                            {data.skill_tags
                              ? data.skill_tags.map(item => {
                                  return (
                                    <ListItem className={classes.skilltags}>
                                      {item}
                                    </ListItem>
                                  );
                                })
                              : ''}
                          </List>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {data.intro_desc}
                          </Typography>
                        </CardContent>
                        <Divider className={classes.divider} />
                        <CardActions
                          style={{ justifyContent: 'space-between' }}
                        >
                          <div>
                            <b>{data.price_per_hour} VNĐ/H</b>
                          </div>
                          <Star star={data.num_rate} />
                          <Button
                            size="sm"
                            color="primary"
                            className={classes.profile}
                            onClick={() => {
                              dispatch(UserActions.GetTutorProfile(data.id));
                            }}
                          >
                            Profile
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
              <Paginations
                pages={[
                  {
                    text: 'PREV',
                    onClick: () => {
                      if (page === 1) return;
                      page -= 1;
                      dispatch(UserActions.GetListTutor(page));
                      history.push(`/page/${page}`);
                    }
                  },
                  {
                    text: 'NEXT',
                    onClick: () => {
                      if (tutors.length === 0) return;
                      page += 1;
                      dispatch(UserActions.GetListTutor(page));
                      history.push(`/page/${page}`);
                    }
                  }
                ]}
                color="info"
              />
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
