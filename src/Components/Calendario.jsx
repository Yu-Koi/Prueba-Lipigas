import 'date-fns';
import React from 'react'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from "@material-ui/core/styles";

const Calendario = () => {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-04T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    return (
        <>

<MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="3. Selecciona el día y el rango horario"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

     
      </Grid>
    </MuiPickersUtilsProvider>
            
        </>
    )
}

export default Calendario
