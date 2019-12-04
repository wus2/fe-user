import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { LinkContainer } from 'react-router-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'shared/Components/Button';
import CustomDropdown from 'shared/Components/CustomDropdown';
import { Apps } from '@material-ui/icons';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import styles from 'shared/Styles/headerLinksStyle';

const useStyles = makeStyles(styles);

export default function HeaderStudent(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Danh Mục"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={[
            <LinkContainer to="/" className={classes.dropdownLink}>
              <div>
                <i className={`${classes.socialIcons} fas fa-registered`} />
                Danh muc
              </div>
            </LinkContainer>,
            <LinkContainer to="/" className={classes.dropdownLink}>
              <div>
                <i className={`${classes.socialIcons} fas fa-registered`} />
                Danh muc
              </div>
            </LinkContainer>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Khu Vực"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={EmojiTransportationIcon}
          dropdownList={[
            <LinkContainer to="/" className={classes.dropdownLink}>
              <div>
                <i className={`${classes.socialIcons} fas fa-registered`} />
                Quận 1
              </div>
            </LinkContainer>,
            <LinkContainer to="/" className={classes.dropdownLink}>
              <div>
                <i className={`${classes.socialIcons} fas fa-registered`} />
                Quận 2
              </div>
            </LinkContainer>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkContainer to="/">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fas fa-graduation-cap`} />
            Gia Sư
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
            <i className={`${classes.socialIcons} fas fa-star`} />
            Top Gia Sư
          </Button>
        </LinkContainer>
      </ListItem>
    </List>
  );
}
