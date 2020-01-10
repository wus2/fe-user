import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from 'reduxs/reducers/User/action';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import People from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import CardID from '@material-ui/icons/RecentActors';
import Money from '@material-ui/icons/MonetizationOn';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
// core components
import moment from 'moment';
// import Footer from 'components/Footer/Footer';
import SnackbarContent from 'shared/Components/SnackbarContent';
import GridContainer from 'shared/Components/Grid/GridContainer';
import GridItem from 'shared/Components/Grid/GridItem';
import Button from 'shared/Components/Button';
import Card from 'shared/Components/Card/Card';
import CardBody from 'shared/Components/Card/CardBody';
import CardHeader from 'shared/Components/Card/CardHeader';
import CardFooter from 'shared/Components/Card/CardFooter';
import CustomInput from 'shared/Components/CustomInput';

import styles from 'shared/Styles/loginPage';

// import image from 'assets/img/bg7.jpg';

const useStyles = makeStyles(styles);

export default function RegisterPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);

  const drawData = data => {
    return data.map((val, ind) => {
      return (
        <MenuItem key={ind} value={val}>
          {val}
        </MenuItem>
      );
    });
  };
  const userState = useSelector(state => state.userState);
  const { errors } = userState;

  const [state, setState] = React.useState({
    password: null,
    username: null,
    name: null,
    email: null,
    district: null,
    address: null,
    phone: null,
    cardID: null,
    gender: null,
    price: null,
    role: null,
    dob: new Date('1900-12-16')
  });

  const dispatch = useDispatch();

  const handleChange = prop => event => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleDateChange = date => {
    date = moment(date * 1000).format('YYYY-MM-DD');
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
              <SnackbarContent
                message={
                  <span>
                    <b>Please check your email to confirm account</b>
                  </span>
                }
                close
                color="success"
                icon="info_outline"
              />
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>SignUp</h3>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="https://wusbeuser.herokuapp.com/user/auth/facebook"
                        target="_blank"
                        color="transparent"
                        // onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        href="https://wusbeuser.herokuapp.com/user/auth/google"
                        target="_blank"
                        color="transparent"
                        // onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <CardBody>
                    {data.map(item => {
                      return (
                        <CustomInput
                          labelText={item.label}
                          id={item.id}
                          formControlProps={{
                            fullWidth: true
                          }}
                          handleChange={handleChange(item.id)}
                          inputProps={{
                            required: true,
                            type: `${item.type}`,
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
                        value={state.district}
                        onChange={handleChange('district')}
                      >
                        {drawData(district)}
                      </Select>
                    </FormControl>

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
                        value={state.gender}
                        onChange={handleChange('gender')}
                      >
                        <MenuItem value="Nam">Nam</MenuItem>
                        <MenuItem value="Nữ">Nữ</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Loại tài khoản
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="role"
                        value={state.role}
                        onChange={handleChange('role')}
                      >
                        <MenuItem value={1}>Gia sư</MenuItem>
                        <MenuItem value={2}>Học viên</MenuItem>
                      </Select>
                    </FormControl>
                    {state.role === 1 ? (
                      <CustomInput
                        labelText="Giá tiền (VNĐ/giờ)"
                        id="price"
                        formControlProps={{
                          fullWidth: true
                        }}
                        handleChange={handleChange('price')}
                        inputProps={{
                          required: true,
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
                    <CustomInput
                      labelText="Mật khẩu"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      handleChange={handleChange('password')}
                      inputProps={{
                        required: true,
                        type: 'password',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off'
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={() => dispatch(UserActions.SignUp(state))}
                    >
                      Sign Up
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

const data = [
  {
    label: 'Username',
    id: 'username',
    type: 'text',
    icon: PersonIcon
  },
  {
    label: 'Họ tên',
    id: 'name',
    type: 'text',
    icon: People
  },
  {
    label: 'Email',
    id: 'email',
    type: 'email',
    icon: Email
  },
  {
    label: 'Số điện thoại',
    id: 'phone',
    type: 'text',
    icon: PhoneIcon
  },
  {
    label: 'CMND',
    id: 'cardID',
    type: 'text',
    icon: CardID
  },
  {
    label: 'Địa chỉ',
    id: 'address',
    type: 'text',
    icon: HomeIcon
  }
];
