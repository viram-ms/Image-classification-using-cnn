import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    maxWidth: 600,
  },
}));

export default function SimpleTable(props) {
  const {cardata} = props;  
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>CAR ID</TableCell>
            <TableCell align="right">CAR NUMBER</TableCell>
            <TableCell align="right">FUEL TYPE</TableCell>
            <TableCell align="right">PRICE/KM</TableCell>
            <TableCell align="right">START DATE</TableCell>
            <TableCell align="right">END DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={cardata.VehicleId}>
              <TableCell component="th" scope="row">
                {cardata.VehicleId}
              </TableCell>
              <TableCell align="right">{cardata.VehicleNo}</TableCell>
              <TableCell align="right">{cardata.FType}</TableCell>
              <TableCell align="right">{cardata.Price}</TableCell>
              <TableCell align="right">{localStorage.getItem('StartDate')}</TableCell>
              <TableCell align="right">{localStorage.getItem('EndDate')}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}
