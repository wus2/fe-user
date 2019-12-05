import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { LinkContainer } from 'react-router-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'shared/Components/Button';
import styles from 'shared/Styles/headerLinksStyle';

const useStyles = makeStyles(styles);

export default function HeaderTutor(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <LinkContainer to="/">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fas fa-book`} />
            Tài Liệu
          </Button>
        </LinkContainer>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkContainer to="/">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fas fa-history`} />
            Lịch Sử
          </Button>
        </LinkContainer>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkContainer to="/">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fas fa-file`} />
            Giới Thiệu
          </Button>
        </LinkContainer>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkContainer to="/">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} far fa-chart-bar`} />
            Thống Kê
          </Button>
        </LinkContainer>
      </ListItem>
    </List>
  );
}
