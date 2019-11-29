import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'layouts/Header/Header';
import HeaderLinks from 'layouts/Header/HeaderLinks';
import Footer from 'layouts/Footer/Footer';
import styles from 'shared/Styles/components';

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Uber Tutor"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
      <Footer whiteFont />
    </div>
  );
}
