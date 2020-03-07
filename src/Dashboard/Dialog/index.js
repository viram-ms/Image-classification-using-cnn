import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from '../DatePicker';
import { StyledTitle } from './style';
import {Link } from 'react-router-dom';
export default function AlertDialog(props) {
 
    const {open, handleClose,createBill, selectedStartDate, selectedEndDate,handleStartDateChange, handleEndDateChange} = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Select days of journey"}</DialogTitle>
        <StyledTitle variant="subtitle1">Per day 300kms will be considered</StyledTitle>
        <DialogContent>
         <DatePicker  selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
          <Button onClick={createBill} color="primary" autoFocus component={Link} to={"/bill"}>
            Proceed to payment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
