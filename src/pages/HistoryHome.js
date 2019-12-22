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

export default function HistoryHome(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userState);
  const { historyDeal } = userState;
  const { ...rest } = props;

  return (
    <div>
      <Parallax small filter image={require('shared/Img/bg7.jpg')} />
      {historyDeal ? (
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.section}>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={8}>
                <h2 className={classes.topic}>Danh Sách Hợp Đồng</h2>
              </Grid>
              <Divider className={classes.divider} />
            </Grid>
            <div>
              <Grid container style={{ margin: '0px 10px' }}>
                {historyDeal.map(data => {
                  return (
                    <Grid item xs={12} sm={12} md={4}>
                      <Card className={classes.card}>
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
                          subheader={data.phone}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Giờ học: {data.intro_desc}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Giá tiền: {data.intro_desc}
                          </Typography>
                        </CardContent>
                        <Divider className={classes.divider} />
                        <CardActions style={{ justifyContent: 'center' }}>
                          <Button
                            size="sm"
                            color="primary"
                            className={classes.profile}
                            onClick={() => {
                              dispatch(UserActions.GetTutorProfile(data.id));
                            }}
                          >
                            Detail
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
                      if (historyDeal.length === 0) return;
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
