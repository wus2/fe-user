import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Header from 'layouts/Header/Header';
import HeaderLinks from 'layouts/Header/HeaderLinks';
import HeaderStudent from 'layouts/Header/HeaderStudent';
import Footer from 'layouts/Footer/Footer';
import styles from 'shared/Styles/components';

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item lg={12} md={12} xl={12} xs={12}>
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
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
          style={{ marginTop: '44px' }}
        >
          <HeaderStudent />
        </Grid>
      </Grid>
      <Footer whiteFont />
    </div>
  );
}
