import React from 'react';
import * as UserActions from 'reduxs/reducers/User/action';
import { useDispatch, useSelector } from 'react-redux';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// import Footer from 'components/Footer/Footer';
import GridContainer from 'shared/Components/Grid/GridContainer';
import GridItem from 'shared/Components/Grid/GridItem';
import Button from 'shared/Components/Button';
import SnackbarContent from 'shared/Components/SnackbarContent';
import Card from 'shared/Components/Card/Card';
import CardBody from 'shared/Components/Card/CardBody';
import CardHeader from 'shared/Components/Card/CardHeader';
import CardFooter from 'shared/Components/Card/CardFooter';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import styles from 'shared/Styles/loginPage';

const useStyles = makeStyles(styles);
export default function UpadateSkills(props) {
  const dispatch = useDispatch();

  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  const userState = useSelector(state => state.userState);
  setTimeout(() => {
    setCardAnimation('');
  }, 700);
  const [skills, setSkills] = React.useState([]);
  const { errors } = userState;
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(UserActions.UpdateSkill(skills));
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
                    <h2>Update Skills</h2>
                  </CardHeader>
                  <CardBody>
                    <Autocomplete
                      multiple
                      id="tags-standard"
                      options={userState.skills}
                      defaultValue={userState.user.skill_tags}
                      onChange={(event, value) => setSkills(value)}
                      renderInput={params => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="Multiple Skills"
                          placeholder="Skill"
                          fullWidth
                        />
                      )}
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
