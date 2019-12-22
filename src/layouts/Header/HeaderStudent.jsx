import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import history from 'historyConfig';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'shared/Components/Button';
import CustomDropdown from 'shared/Components/CustomDropdown';
import { Apps } from '@material-ui/icons';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import styles from 'shared/Styles/headerLinksStyle';

const useStyles = makeStyles(styles);

export default function HeaderStudent(props) {
  const classes = useStyles();
  const userState = useSelector(state => state.userState);

  const dataDistricts = [];
  const dataSkills = [];
  district.map(item => {
    return dataDistricts.push(
      <div onClick={() => history.push('/')} className={classes.dropdownLink}>
        <div>{item}</div>
      </div>
    );
  });
  if (userState.skills) {
    userState.skills.map(item => {
      return dataSkills.push(
        <div onClick={() => history.push('/')} className={classes.dropdownLink}>
          <div>{item}</div>
        </div>
      );
    });
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Kỹ Năng"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={dataSkills}
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
          dropdownList={dataDistricts}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Mức Giá"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={EmojiTransportationIcon}
          dropdownList={[
            <div
              onClick={() => history.push('/')}
              className={classes.dropdownLink}
            >
              <div>Dưới 100.000</div>
            </div>,
            <div
              onClick={() => history.push('/')}
              className={classes.dropdownLink}
            >
              <div>100.000 - 150.000</div>
            </div>,
            <div
              onClick={() => history.push('/')}
              className={classes.dropdownLink}
            >
              <div>150.000 - 200.000</div>
            </div>,
            <div
              onClick={() => history.push('/')}
              className={classes.dropdownLink}
            >
              <div>Trên 200.000</div>
            </div>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <div onClick={() => history.push('/')}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fas fa-star`} />
            Top Gia Sư
          </Button>
        </div>
      </ListItem>
      <ListItem className={classes.listItem}>
        <div onClick={() => history.push('/tutee/contracthistory')}>
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
    </List>
  );
}

const district = [
  'Quận 1',
  'Quận 2',
  'Quận 3',
  'Quận 4',
  'Quận 5',
  'Quận 6',
  'Quận 7',
  'Quận 8',
  'Quận 9',
  'Quận 10',
  'Quận 11',
  'Quận 12',
  'Quận Thủ Đức',
  'Quận Gò Vấp',
  'Quận Bình Thạnh',
  'Quận Tân Bình',
  'Quận Tân Phú',
  'Quận Phú Nhuận',
  'Quận Bình Tân',
  'Huyện Củ Chi',
  'Huyện Hóc Môn',
  'Huyện Bình Chánh',
  'Huyện Nhà Bè',
  'Huyện Cần Giờ'
];
