import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as UserActions from 'reduxs/reducers/User/action';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'layouts/Header/Header';
import HeaderLinks from 'layouts/Header/HeaderLinks';

import HeaderStudent from 'layouts/Header/HeaderStudent';
import HeaderTutor from 'layouts/Header/HeaderTutor';
import styles from 'shared/Styles/components';

const useStyles = makeStyles(styles);

export default function HeaderNav(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userState);
  const { isSignIn, role, tutors, skills, socket, topTutor } = userState;
  if (!skills) {
    dispatch(UserActions.GetSkills());
  }

  if (!tutors) {
    dispatch(UserActions.GetListTutor(1));
  }

  if (!topTutor) {
    dispatch(UserActions.GetTopTutor());
  }

  if (!socket) {
    dispatch(UserActions.CreateSocket());
  }

  if (!isSignIn && window.localStorage.getItem('token') !== null) {
    dispatch(UserActions.GetProfile());
    dispatch(UserActions.GetListNoti(1));
  }

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
