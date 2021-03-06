import React from 'react';
import * as UserActions from 'reduxs/reducers/User/action';
import { useDispatch, useSelector } from 'react-redux';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FaceIcon from '@material-ui/icons/Face';

// import Footer from 'components/Footer/Footer';
import GridContainer from 'shared/Components/Grid/GridContainer';
import GridItem from 'shared/Components/Grid/GridItem';
import Button from 'shared/Components/Button';
import SnackbarContent from 'shared/Components/SnackbarContent';
import Card from 'shared/Components/Card/Card';
import CardBody from 'shared/Components/Card/CardBody';
import CardHeader from 'shared/Components/Card/CardHeader';
import CardFooter from 'shared/Components/Card/CardFooter';
import CustomInput from 'shared/Components/CustomInput';

import styles from 'shared/Styles/loginPage';

const useStyles = makeStyles(styles);
export default function UpadateAvatar(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);

  const [avatar, setAvatar] = React.useState(null);
  const userState = useSelector(state => state.userState);
  const { errors } = userState;

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData();
    data.append('avatar', avatar);

    dispatch(UserActions.UpdateAvatar(data));
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
                <form
                  className={classes.form}
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  method="post"
                >
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h2>Update Avatar</h2>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Ảnh đại diện"
                      id="avatar"
                      name="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      handleChange={event => setAvatar(event.target.files[0])}
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
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" type="submit">
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
