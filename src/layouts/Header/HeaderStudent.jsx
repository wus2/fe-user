import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';
import Header from 'layouts/Header/Header';
import styles from 'shared/Styles/headerLinksStyle';
import CustomInput from 'shared/Components/CustomInput';
import Button from 'shared/Components/Button.js';

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <Header
      brand="Brand"
      color="primary"
      leftLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Link
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Link
            </Button>
          </ListItem>
        </List>
      }
      rightLinks={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CustomInput
            white
            inputRootCustomClasses={classes.inputRootCustomClasses}
            formControlProps={{
              className: classes.formControl
            }}
            inputProps={{
              placeholder: 'Search',
              inputProps: {
                'aria-label': 'Search',
                className: classes.searchInput
              }
            }}
          />
          <Button justIcon round color="white">
            <Search className={classes.searchIcon} />
          </Button>
        </div>
      }
    />
  );
}
