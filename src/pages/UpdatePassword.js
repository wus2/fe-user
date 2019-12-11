import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from 'reduxs/reducers/User/action';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import Icon from '@material-ui/core/Icon';
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

export default function UpdatePassword(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);

  const [state, setState] = React.useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const handleChange = prop => event => {
    setState({ ...state, [prop]: event.target.value });
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
                    <h2>Update Password</h2>
                  </CardHeader>
                  <CardBody>
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
                      onClick={() => {
                        dispatch(UserActions.UpdatePassword(state));
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
