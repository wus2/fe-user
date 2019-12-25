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
import Paginations from 'shared/Components/Pagination';
import image from 'shared/Img/logo192.png';
import styles from 'shared/Styles/components';

const useStyles = makeStyles(styles);
let page = 1;

export default function HistoryHome(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userState);
  const { historyDeal, role } = userState;
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
                      <Card
                        style={{
                          minHeight: '200px',
                          display: 'grid',
                          marginTop: '20px'
                        }}
                        className={classes.card}
                      >
                        <CardHeader
                          avatar={
                            <Avatar
                              aria-label="recipe"
                              src={
                                data.avatar
                                  ? `https://wusbeuser.herokuapp.com/${data.avatar}`
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
                            Giờ học: {data.rent_time}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Thanh toán: {data.order_amount} VNĐ
                          </Typography>
                        </CardContent>
                        <Divider className={classes.divider} />
                        <CardActions style={{ justifyContent: 'space-around' }}>
                          {role === 2 && data.status !== 4 ? (
                            <Button
                              size="sm"
                              color="primary"
                              href={`https://wusbeuser.herokuapp.com/order/create/${data.cid}`}
                              // onClick={() => {
                              //   dispatch(UserActions.GetDetailDeal(data.cid));
                              // }}
                            >
                              Payment
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              color="primary"
                              href={`https://wusbeuser.herokuapp.com/order/create/${data.cid}`}
                              disabled
                            >
                              Payment
                            </Button>
                          )}
                          <Button
                            size="sm"
                            color="primary"
                            onClick={() => {
                              dispatch(UserActions.GetDetailDeal(data.cid));
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
                      dispatch(UserActions.GetListHisDeal(page));
                      history.push(`/contracthistory/page/${page}`);
                    }
                  },
                  {
                    text: 'NEXT',
                    onClick: () => {
                      if (historyDeal.length === 0) return;
                      page += 1;
                      dispatch(UserActions.GetListHisDeal(page));
                      history.push(`/contracthistory/page/${page}`);
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
