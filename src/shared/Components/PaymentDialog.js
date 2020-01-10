import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  divider: {
    margin: theme.spacing(2),
    width: '95%',
    alignSelf: 'center'
  }
}));

const VayVonDialog = props => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  const { open, handleClose } = props;
  const date = new Date();

  const [values, setValues] = React.useState({
    cmnd: '',
    address: '',
    dien: '',
    doituong: '',
    date: moment(date * 1000).format('DD/MM/YYYY')
  });

  const dataThuocDien = ['Không miễn giảm', 'Giảm học phí', 'Miễn học phí'];
  const dataDoiTuong = ['Mồ côi', 'Không mồ côi'];

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const drawData = data => {
    return data.map((val, ind) => {
      return <MenuItem value={val}>{val}</MenuItem>;
    });
  };

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <b>Thanh Toán Hợp Đồng</b>
        </DialogTitle>
        <DialogContent className={classes.container}>
          <TextField
            className={classes.textField}
            label="CMND"
            defaultValue="1612123"
            onChange={handleChange('cmnd')}
            margin="normal"
          />
          <TextField
            className={classes.textField}
            label="Nơi cấp"
            margin="normal"
            defaultValue="Bà Rịa - Vũng Tàu"
            onChange={handleChange('address')}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Ngày cấp"
              format="dd/MM/yyyy"
              value={date}
              onChange={handleChange('date')}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </MuiPickersUtilsProvider>
          <Divider className={classes.divider} />
          <FormControl className={classes.textField}>
            <InputLabel id="demo-simple-select-helper-label">
              Thuộc diện
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={handleChange('dien')}
            >
              {drawData(dataThuocDien)}
            </Select>
          </FormControl>

          <FormControl className={classes.textField}>
            <InputLabel id="demo-simple-select-helper-label">
              Thuộc đối tượng
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={handleChange('doituong')}
            >
              {drawData(dataDoiTuong)}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Huỷ
          </Button>
          <Button color="primary">Xác nhận</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VayVonDialog;
