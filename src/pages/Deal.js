import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from 'reduxs/reducers/User/action';
// @material-ui/core components
import moment from 'moment';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// core components
import GridContainer from 'shared/Components/Grid/GridContainer';
import GridItem from 'shared/Components/Grid/GridItem';
import CustomInput from 'shared/Components/CustomInput';
import SnackbarContent from 'shared/Components/SnackbarContent';
import Button from 'shared/Components/Button';
import Card from 'shared/Components/Card/Card';
import CardHeader from 'shared/Components/Card/CardHeader';
import CardAvatar from 'shared/Components/Card/CardAvatar';
import CardBody from 'shared/Components/Card/CardBody';
import CardFooter from 'shared/Components/Card/CardFooter';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import Parallax from 'shared/Components/Parallax';
import image from 'shared/Img/logo192.png';

import styles from 'shared/Styles/introduceStyle';

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const userState = useSelector(state => state.userState);
  const { tutor, errors, user } = userState;
  const [state, setState] = React.useState({
    startTime: null,
    tutorID: tutor.id,
    tutorUsername: tutor.name,
    rentTime: null,
    rentPrice: tutor.price_per_hour,
    description: null
  });

  const dispatch = useDispatch();

  const handleChange = prop => event => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleDateChange = date => {
    date = moment(date).format('YYYY-MM-DD');
    setState({ ...state, startTime: date });
  };
  return (
    <div>
      <Parallax small filter image={require('shared/Img/bg7.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridContainer style={{ marginTop: '30px' }} spacing={4}>
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
                <GridItem xs={12} sm={12} md={8}>
                  <Card>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>Hợp Đồng</h4>
                      <p className={classes.cardCategoryWhite}>
                        Hoàn tất giao dịch
                      </p>
                    </CardHeader>
                    <CardBody>
                      <GridContainer spacing={4}>
                        <GridItem xs={12} sm={12} md={5}>
                          <CustomInput
                            labelText="Họ tên"
                            id="name"
                            error={errors}
                            defaultVL={user.name}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControlClassName
                            }}
                            inputProps={{
                              readOnly: true,
                              name: 'name',
                              type: 'text'
                            }}
                          />
                        </GridItem>

                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="CMND"
                            id="cardID"
                            error={errors}
                            defaultVL={user.card_id}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControlClassName
                            }}
                            inputProps={{
                              readOnly: true,
                              name: 'cardID',
                              type: 'text'
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <CustomInput
                            labelText="Liên hệ"
                            id="phone"
                            error={errors}
                            defaultVL={user.phone}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControlClassName
                            }}
                            inputProps={{
                              readOnly: true,
                              name: 'phone',
                              type: 'text'
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer spacing={4}>
                        <GridItem xs={12} sm={12} md={6}>
                          <CustomInput
                            labelText="Địa chỉ"
                            id="address"
                            error={errors}
                            defaultVL={`${tutor.address}, ${tutor.district}, TP.HCM`}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControlClassName
                            }}
                            inputProps={{
                              readOnly: true,
                              name: 'address',
                              type: 'text'
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                          <CustomInput
                            labelText="Email"
                            id="email"
                            error={errors}
                            defaultVL={user.email}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControlClassName
                            }}
                            inputProps={{
                              readOnly: true,
                              name: 'email',
                              type: 'email'
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer spacing={4}>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Số giờ học"
                            id="rentTime"
                            error={errors}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControlClassName
                            }}
                            handleChange={handleChange('rentTime')}
                            inputProps={{
                              required: true,
                              name: 'rentTime',
                              type: 'number'
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Giá tiền/giờ"
                            id="rentPrice"
                            error={errors}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControlClassName
                            }}
                            defaultVL={tutor.price_per_hour}
                            inputProps={{
                              disabled: true,
                              name: 'rentPrice',
                              type: 'number'
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              style={{ width: '100%' }}
                              disableToolbar
                              variant="inline"
                              format="yyyy-MM-dd"
                              margin="normal"
                              id="startTime"
                              label="Ngày bắt đầu"
                              value={state.startTime}
                              onChange={handleDateChange}
                              KeyboardButtonProps={{
                                'aria-label': 'startTime'
                              }}
                            />
                          </MuiPickersUtilsProvider>
                        </GridItem>
                      </GridContainer>
                      <GridContainer spacing={4}>
                        <GridItem xs={12} sm={12} md={12}>
                          <InputLabel style={{ color: '#AAAAAA' }}>
                            Ghi chú
                          </InputLabel>
                          <CustomInput
                            labelText="Bình luận"
                            id="comment"
                            formControlProps={{
                              fullWidth: true
                            }}
                            handleChange={handleChange('comment')}
                            inputProps={{
                              multiline: true,
                              required: true,
                              name: 'comment',
                              rows: 3
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                    <CardFooter>
                      <Button
                        onClick={() => dispatch(UserActions.RentTutor(state))}
                        color="primary"
                      >
                        Gửi Hợp Đồng
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card profile>
                    <CardAvatar profile>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          src={
                            tutor.avatar
                              ? `https://wusbeuser.herokuapp.com${tutor.avatar}`
                              : image
                          }
                          alt="..."
                        />
                      </a>
                    </CardAvatar>
                    <CardBody profile className={classes.profile}>
                      <h6 className={classes.cardCategory}>{tutor.degree}</h6>
                      <h4 className={classes.cardTitle}>{tutor.name}</h4>
                      <h4 className={classes.cardTitle}>
                        {tutor.price_per_hour}/giờ
                      </h4>
                      <p className={classes.description}>{tutor.intro_desc}</p>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
