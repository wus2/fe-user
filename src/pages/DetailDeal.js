import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import history from 'historyConfig';
// nodejs library that concatenates classes
import moment from 'moment';
import classNames from 'classnames';
import Rating from '@material-ui/lab/Rating';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import {
  Grid,
  Divider,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Box
} from '@material-ui/core';
import Button from 'shared/Components/Button';
import CustomInput from 'shared/Components/CustomInput';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
// core components
import SnackbarContent from 'shared/Components/SnackbarContent';
import Parallax from 'shared/Components/Parallax';
import Star from 'shared/Components/Star';
import image from 'shared/Img/logo192.png';

import styles from 'shared/Styles/introduceStyle';

const useStyles = makeStyles(styles);

export default function Introduce(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userState);
  const { detailDeal, role, isSignIn } = userState;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [open, setOpen] = React.useState(false);
  const [rate, setRate] = React.useState({
    star: 0,
    comment: null
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Parallax small filter image={require('shared/Img/bg7.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={
                        detailDeal.avatar
                          ? `https://wusbeuser.herokuapp.com${detailDeal.avatar}`
                          : image
                      }
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  {role === 2 ? (
                    <div>
                      <b>
                        <h4>{detailDeal.degree}</h4>
                      </b>
                      <b>
                        {' '}
                        <h4>Giá tiền(VNĐ/giờ): {detailDeal.price}</h4>
                      </b>
                      <Star star={detailDeal.rate} />
                    </div>
                  ) : (
                    ''
                  )}
                  <Divider className={classes.divider} />
                  <div>
                    <b>
                      <h4>THÔNG TIN ĐỐI TÁC</h4>
                    </b>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Họ tên:</b> {detailDeal.name}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Địa chỉ:</b> {detailDeal.address},{' '}
                      {detailDeal.district}, TP. Hồ Chí Minh
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Email:</b> {detailDeal.email}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Liên hệ:</b> {detailDeal.phone}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Giới thiệu:</b> {detailDeal.intro_desc}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Giờ học:</b> {detailDeal.price}
                    </p>
                  </div>
                  <div className={classes.description}>
                    <p>
                      <b>Ngày tạo:</b> {detailDeal.price}
                    </p>
                  </div>
                  {role === 2 ? (
                    <div className={classes.description}>
                      <p>
                        <List
                          className={classes.flex}
                          component="nav"
                          aria-label="secondary mailbox folder"
                        >
                          {detailDeal.skill_tags
                            ? detailDeal.skill_tags.map(item => {
                                return (
                                  <ListItem className={classes.skilltags}>
                                    {item}
                                  </ListItem>
                                );
                              })
                            : ''}
                        </List>
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </Grid>
              {role === 2 ? (
                isSignIn ? (
                  <>
                    <Divider className={classes.divider} />
                    <Button onClick={handleClickOpen} size="sm" color="primary">
                      Đánh Giá
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        Hãy Đánh Giá Một Cách Khách Quan
                      </DialogTitle>
                      <DialogContent>
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
                          <Rating
                            name="simple-controlled"
                            value={rate.star}
                            onChange={(event, newValue) => {
                              setRate({ ...rate, star: newValue });
                            }}
                          />
                          <CustomInput
                            labelText="Nội dung thông tin giao dịch cần lưu ý..."
                            id="description"
                            formControlProps={{
                              fullWidth: true
                            }}
                            handleChange={(event, newValue) => {
                              setRate({ ...rate, comment: newValue });
                            }}
                            inputProps={{
                              multiline: true,
                              required: true,
                              name: 'description',
                              rows: 5
                            }}
                          />
                        </Box>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Close
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                          Evaluate
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </>
                ) : (
                  ''
                )
              ) : (
                ''
              )}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
