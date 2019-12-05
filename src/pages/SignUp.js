import React from 'react';
import { useDispatch } from 'react-redux';
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
import Warning from '@material-ui/icons/Warning';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import People from '@material-ui/icons/People';
// core components
import HeaderNav from 'layouts/Header/HeaderNav';
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

import Footer from 'layouts/Footer/Footer';

import styles from 'shared/Styles/loginPage';

// import image from 'assets/img/bg7.jpg';

const useStyles = makeStyles(styles);

export default function RegisterPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);

  const [state, setState] = React.useState({
    username: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    cardID: '',
    gender: '',
    password: '',
    role: null,
    dob: new Date('1900-12-16')
  });

  const dispatch = useDispatch();

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
              <SnackbarContent
                message={
                  <span>
                    <b>Please check your email to confirm account</b>
                  </span>
                }
                close
                color="success"
                icon={Warning}
              />
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>SignUp</h3>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="https://wusbeuser.herokuapp.com/users/auth/facebook"
                        target="_blank"
                        color="transparent"
                        // onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        href="https://wusbeuser.herokuapp.com/users/auth/google"
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
                    <CustomInput
                      labelText="Họ tên"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
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
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      handleChange={handleChange('username')}
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
                      handleChange={handleChange('email')}
                      inputProps={{
                        type: 'email',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Địa chỉ"
                      id="address"
                      formControlProps={{
                        fullWidth: true
                      }}
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

                    {/* <CustomInput
                      labelText="Xác nhận mật khẩu"
                      id="confirm"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
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
                    /> */}
                    {/* <CustomInput
                      labelText="Ảnh đại diện"
                      id="avatar"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'file',
                        endAdornment: (
                          <InputAdornment position="end">
                            <FaceIcon className={classes.inputIconsColor}>
                              lock_outline
                            </FaceIcon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off'
                      }}
                    /> */}
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
                    <CustomInput
                      labelText="Mật khẩu"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      handleChange={handleChange('password')}
                      inputProps={{
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
      <Footer whiteFont />
    </div>
  );
}
