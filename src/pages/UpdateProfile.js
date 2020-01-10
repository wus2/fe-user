import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from 'reduxs/reducers/User/action';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// @material-ui/icons
import Money from '@material-ui/icons/MonetizationOn';
import Email from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import People from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import CardID from '@material-ui/icons/RecentActors';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import moment from 'moment';
// import Footer from 'components/Footer/Footer';
import GridContainer from 'shared/Components/Grid/GridContainer';
import GridItem from 'shared/Components/Grid/GridItem';
import SnackbarContent from 'shared/Components/SnackbarContent';
import Button from 'shared/Components/Button';
import Card from 'shared/Components/Card/Card';
import CardBody from 'shared/Components/Card/CardBody';
import CardHeader from 'shared/Components/Card/CardHeader';
import CardFooter from 'shared/Components/Card/CardFooter';
import CustomInput from 'shared/Components/CustomInput';

import styles from 'shared/Styles/loginPage';

const useStyles = makeStyles(styles);

export default function UpdateProfile(props) {
  const dispatch = useDispatch();
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);
  const userState = useSelector(state => state.userState);
  const { errors } = userState;

  const drawData = data => {
    return data.map(val => {
      return <MenuItem value={val}>{val}</MenuItem>;
    });
  };

  const data = [
    {
      label: 'Username',
      id: 'username',
      type: 'text',
      read: true,
      dfValue: userState.user.username,
      icon: PersonIcon
    },
    {
      label: 'Họ tên',
      id: 'name',
      type: 'text',
      read: false,
      dfValue: userState.user.name,
      icon: People
    },
    {
      label: 'Email',
      id: 'email',
      type: 'email',
      read: true,
      dfValue: userState.user.email,
      icon: Email
    },
    {
      label: 'Số điện thoại',
      id: 'phone',
      type: 'text',
      read: false,
      dfValue: userState.user.phone,
      icon: PhoneIcon
    },
    {
      label: 'CMND',
      id: 'cardID',
      type: 'text',
      read: false,
      dfValue: userState.user.card_id,
      icon: CardID
    },
    {
      label: 'Địa chỉ',
      id: 'address',
      type: 'text',
      read: false,
      dfValue: userState.user.address,
      icon: HomeIcon
    }
  ];

  const [state, setState] = React.useState({
    username: null,
    name: null,
    email: null,
    district: null,
    address: null,
    phone: null,
    cardID: null,
    gender: null,
    price: null,
    dob: userState.user.dob
  });

  const handleChange = prop => event => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleDateChange = date => {
    date = moment(date).format('YYYY-MM-DD');
    setState({ ...state, dob: date });
  };

  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          //   backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              {errors ? (
                <SnackbarContent
                  message={
                    <span>
                      <b>{errors}</b>
                    </span>
                  }
                  close
                  color="danger"
                  icon="info_outline"
                />
              ) : (
                ''
              )}
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h2>Update Profile</h2>
                  </CardHeader>
                  <CardBody>
                    {data.map(item => {
                      return (
                        <CustomInput
                          labelText={item.label}
                          id={item.id}
                          formControlProps={{
                            fullWidth: true
                          }}
                          defaultVL={item.dfValue}
                          handleChange={handleChange(item.id)}
                          inputProps={{
                            type: `${item.type}`,
                            readOnly: `${item.read}`,
                            endAdornment: (
                              <InputAdornment position="end">
                                <item.icon
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            )
                          }}
                        />
                      );
                    })}

                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Khu vực
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="district"
                        value={userState.user.district}
                        onChange={handleChange('district')}
                      >
                        {drawData(district)}
                      </Select>
                    </FormControl>

                    {userState.user.role === 1 ? (
                      <CustomInput
                        labelText="Giá tiền (VNĐ/giờ)"
                        id="price"
                        formControlProps={{
                          fullWidth: true
                        }}
                        defaultVL={userState.user.price_per_hour}
                        handleChange={handleChange('price')}
                        inputProps={{
                          type: 'number',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Money className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                    ) : (
                      <div />
                    )}

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        style={{ width: '100%' }}
                        disableToolbar
                        variant="inline"
                        format="yyyy-MM-dd"
                        margin="normal"
                        id="dob"
                        label="Ngày sinh"
                        value={state.dob}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date'
                        }}
                      />
                    </MuiPickersUtilsProvider>
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Giới tính
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="gender"
                        value={userState.user.gender}
                        onChange={handleChange('gender')}
                      >
                        <MenuItem value="Nam">Nam</MenuItem>
                        <MenuItem value="Nữ">Nữ</MenuItem>
                      </Select>
                    </FormControl>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={() => {
                        dispatch(UserActions.UpdateProfile(state));
                      }}
                    >
                      Update
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
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
