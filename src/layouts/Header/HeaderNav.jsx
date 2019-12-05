import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'layouts/Header/Header';
import HeaderLinks from 'layouts/Header/HeaderLinks';
import HeaderStudent from 'layouts/Header/HeaderStudent';
import HeaderTutor from 'layouts/Header/HeaderTutor';
import styles from 'shared/Styles/components';

const useStyles = makeStyles(styles);

export default function HeaderNav(props) {
  const classes = useStyles();
  const userState = useSelector(state => state.userState);
  const { isSignIn, role } = userState;
  const { ...rest } = props;
  return (
    <Header
      brand="Uber Tutor"
      leftLinks={
        isSignIn ? (
          role === 1 ? (
            <HeaderTutor />
          ) : (
            <HeaderStudent />
          )
        ) : (
          <HeaderStudent />
        )
      }
      rightLinks={<HeaderLinks />}
      fixed
      color="transparent"
      changeColorOnScroll={{
        height: 400,
        color: 'white'
      }}
      {...rest}
    />
  );
}
