import React from 'react';
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
import FaceIcon from '@material-ui/icons/Face';
import People from '@material-ui/icons/People';
// core components
import Header from 'layouts/Header/Header';
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

// import image from 'assets/img/bg7.jpg';

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);

  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
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
                    <h3>SignUp</h3>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <CardBody>
                    <CustomInput
                      labelText="Họ tên"
                      id="namename"
                      formControlProps={{
                        fullWidth: true
                      }}
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
                      labelText="Mật khẩu"
                      id="password"
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
                    />
                    <CustomInput
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
                    />
                    <CustomInput
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
                    />
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Loại tài khoản
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>Gia sư</MenuItem>
                        <MenuItem value={2}>Học giả</MenuItem>
                      </Select>
                    </FormControl>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Sign Up
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
