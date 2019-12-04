import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as UserHandler from 'reduxs/handlers/UserHandler';
import * as UserActions from 'reduxs/reducers/User/action';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
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
import Header from 'layouts/Header/Header';
import moment from 'moment';
import HeaderLinks from 'layouts/Header/HeaderLinks';
// import Footer from 'components/Footer/Footer';
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

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  const userState = useSelector(state => state.userState);
  setTimeout(() => {
    setCardAnimation('');
  }, 700);

  const [state, setState] = React.useState({
    user: {},
    username: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    cardID: '',
    gender: '',
    dob: new Date('1900-12-16')
  });

  const getUserData = data => {
    setState({ ...state, user: data });
  };

  if (userState.isSignIn) {
    UserHandler.GetProfile().then(data => {
      return getUserData(data.data);
    });
  }

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
      <Header
        absolute
        brand="Uber Tutor"
        fixed
        color="transparent"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
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
                      defaultVL={state.user.username}
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
                      defaultVL={state.user.name}
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
                      defaultVL={state.user.email}
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
                    <CustomInput
                      labelText="Địa chỉ"
                      id="address"
                      formControlProps={{
                        fullWidth: true
                      }}
                      defaultVL={state.user.address}
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
                      defaultVL={state.user.phone}
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
                      defaultVL={state.user.card_id}
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

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        style={{ width: '100%' }}
                        disableToolbar
                        variant="inline"
                        format="yyyy-MM-dd"
                        margin="normal"
                        id="dob"
                        label="Ngày sinh"
                        value={state.user.dob}
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
                        value={state.user.gender}
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
                      onClick={() => dispatch(UserActions.UpdateProfile(state))}
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
