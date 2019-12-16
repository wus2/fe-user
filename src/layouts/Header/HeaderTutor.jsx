import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as UserActions from 'reduxs/reducers/User/action';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'shared/Components/Button';
import styles from 'shared/Styles/headerLinksStyle';
import history from 'historyConfig';

const useStyles = makeStyles(styles);

export default function HeaderTutor(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userState);
  const { user } = userState;
  const { ...rest } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <div onClick={() => history.push('/')}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fas fa-history`} />
            Lịch Sử
          </Button>
        </div>
      </ListItem>
      <ListItem className={classes.listItem}>
        <div onClick={() => dispatch(UserActions.GetTutorProfile(user.id))}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fas fa-file`} />
            Giới Thiệu
          </Button>
        </div>
      </ListItem>
      <ListItem className={classes.listItem}>
        <div onClick={() => history.push('/')}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} far fa-chart-bar`} />
            Thống Kê
          </Button>
        </div>
      </ListItem>
    </List>
  );
}
