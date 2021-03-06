import React from 'react';
import * as UserActions from 'reduxs/reducers/User/action';
import { useDispatch, useSelector } from 'react-redux';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// import Footer from 'components/Footer/Footer';
import GridContainer from 'shared/Components/Grid/GridContainer';
import GridItem from 'shared/Components/Grid/GridItem';
import SnackbarContent from 'shared/Components/SnackbarContent';
import Button from 'shared/Components/Button';
import Card from 'shared/Components/Card/Card';
import CardBody from 'shared/Components/Card/CardBody';
import CardHeader from 'shared/Components/Card/CardHeader';
import CardFooter from 'shared/Components/Card/CardFooter';

import styles from 'shared/Styles/loginPage';

const useStyles = makeStyles(styles);
export default function UpdateIntroduce(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);
  const userState = useSelector(state => state.userState);
  const { errors } = userState;
  const [introDesc, setIntroduce] = React.useState(null);

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(UserActions.UpdateIntroduce(introDesc));
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
                  method="post"
                >
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h2>Update Introduce</h2>
                  </CardHeader>
                  <CardBody>
                    <TextareaAutosize
                      style={{ width: '-webkit-fill-available' }}
                      aria-label="minimum height"
                      rows={5}
                      placeholder="Introduce..."
                      defaultValue={userState.user.intro_desc}
                      onChange={event => setIntroduce(event.target.value)}
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
