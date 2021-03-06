import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from 'reduxs/reducers/User/action';
import history from 'historyConfig';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import People from '@material-ui/icons/People';
// core components
import GridContainer from 'shared/Components/Grid/GridContainer';
import GridItem from 'shared/Components/Grid/GridItem';
import Button from 'shared/Components/Button';
import Card from 'shared/Components/Card/Card';
import SnackbarContent from 'shared/Components/SnackbarContent';
import CardBody from 'shared/Components/Card/CardBody';
import CardHeader from 'shared/Components/Card/CardHeader';
import CardFooter from 'shared/Components/Card/CardFooter';
import CustomInput from 'shared/Components/CustomInput';
import styles from 'shared/Styles/loginPage';

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  const [state, setState] = React.useState({
    username: '',
    password: ''
  });
  const userState = useSelector(state => state.userState);
  const { errors } = userState;

  const dispatch = useDispatch();
  const classes = useStyles();

  setTimeout(function() {
    setCardAnimation('');
  }, 700);

  const handleChange = prop => event => {
    setState({ ...state, [prop]: event.target.value });
  };

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
                    <h3>SignIn</h3>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="https://wusbeuser.herokuapp.com/user/auth/facebook"
                        target="_blank"
                        color="transparent"
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        href="https://wusbeuser.herokuapp.com/user/auth/google"
                        target="_blank"
                        color="transparent"
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <CardBody>
                    <CustomInput
                      labelText=" Username"
                      id="username"
                      error={errors}
                      formControlProps={{
                        fullWidth: true,
                        className: classes.formControlClassName
                      }}
                      handleChange={handleChange('username')}
                      inputProps={{
                        required: true,
                        name: 'username',
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Mật khẩu"
                      id="password"
                      error={errors}
                      formControlProps={{
                        fullWidth: true,
                        className: classes.formControlClassName
                      }}
                      handleChange={handleChange('password')}
                      inputProps={{
                        required: true,
                        name: 'password',
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
                      onClick={() => {
                        dispatch(
                          UserActions.SignIn(state.username, state.password)
                        );
                      }}
                      simple
                      color="primary"
                      size="lg"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => history.push('/user/forgotpassword')}
                      simple
                      color="primary"
                      size="lg"
                    >
                      Forgot password?
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
