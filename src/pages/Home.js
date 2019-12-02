import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Header from 'layouts/Header/Header';
import HeaderLinks from 'layouts/Header/HeaderLinks';
import HeaderStudent from 'layouts/Header/HeaderStudent';
import Parallax from 'shared/Components/Parallax';
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
        leftLinks={<HeaderStudent />}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
      <Parallax image={require('shared/Img/bg.jpg')}>
        <div className={classes.container}>
          <Grid container spacing={4}>
            <Grid item>
              <div className={classes.brand}>
                <h1 className={classes.title}>UBER TUTOR</h1>
                <h3 className={classes.subtitle}>
                  Nơi hội tụ những con người nhiệt huyết trong sự nghiệp trồng
                  người.
                </h3>
                <h3 className={classes.subtitle}>
                  Chúng tôi chọn bạn! Còn bạn thì sao?
                </h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <Footer whiteFont />
    </div>
  );
}
