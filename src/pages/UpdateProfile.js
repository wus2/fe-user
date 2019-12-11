import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from 'reduxs/reducers/User/action';
import history from 'historyConfig';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Money from '@material-ui/icons/MonetizationOn';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import People from '@material-ui/icons/People';
// core components
import HeaderNav from 'layouts/Header/HeaderNav';
import Footer from 'layouts/Footer/Footer';

import moment from 'moment';
// import Footer from 'components/Footer/Footer';
import GridContainer from 'shared/Components/Grid/GridContainer';
import GridItem from 'shared/Components/Grid/GridItem';
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

  const drawData = data => {
    return data.map((val, ind) => {
      return (
        <MenuItem key={ind} value={val}>
          {val}
        </MenuItem>
      );
    });
  };

  const data = [
    {
      label: '',
      id: '',
      type: '',
      read: false
    },
    {
      label: '',
      id: '',
      type: '',
      read: false
    },
    {
      label: '',
      id: '',
      type: '',
      read: false
    },
    {
      label: '',
      id: '',
      type: '',
      read: false
    },
    {
      label: '',
      id: '',
      type: '',
      read: false
    },
    {
      label: '',
      id: '',
      type: '',
      read: false
    },
    {
      label: '',
      id: '',
      type: '',
      read: false
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
    dob: null
  });

  const handleChange = prop => event => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleDateChange = date => {
    date = moment(date).format('YYYY-MM-DD');
    setState({ ...state, dob: date });
  };

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <HeaderNav />
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
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h2>Update Profile</h2>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      defaultVL={userState.user.username}
                      handleChange={handleChange('username')}
                      inputProps={{
                        type: 'text',
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Họ tên"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      defaultVL={userState.user.name}
                      handleChange={handleChange('name')}
                      inputProps={{
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      defaultVL={userState.user.email}
                      handleChange={handleChange('email')}
                      inputProps={{
                        type: 'email',
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
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
                    <CustomInput
                      labelText="Địa chỉ"
                      id="address"
                      formControlProps={{
                        fullWidth: true
                      }}
                      defaultVL={userState.user.address}
                      handleChange={handleChange('address')}
                      inputProps={{
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <HomeIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Số điện thoại"
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      defaultVL={userState.user.phone}
                      handleChange={handleChange('phone')}
                      inputProps={{
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="CMND"
                      id="cardID"
                      formControlProps={{
                        fullWidth: true
                      }}
                      defaultVL={userState.user.card_id}
                      handleChange={handleChange('cardID')}
                      inputProps={{
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    {userState.user.role === 1 ? (
                      <CustomInput
                        labelText="Giá tiền (VNĐ/giờ)"
                        id="price"
                        formControlProps={{
                          fullWidth: true
                        }}
                        defaultVL={userState.user.price}
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
                        value={userState.user.dob}
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
                        dispatch(UserActions.GetProfile());
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
      <Footer whiteFont />
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
