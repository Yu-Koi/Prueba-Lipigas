import React, { useState, Fragment } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { v4 as uuidv4} from 'uuid';

import GetApi from '../services/GetApi';

const Hours = (props) => {
    console.log(props)

    const optionsData = [

        {id: uuidv4(), name: "7:00 a 9:00",  },
        {id: uuidv4(), name: "9:00 a 11:00" },
        {id: uuidv4(), name: "11:00 a 13:00" },
        {id: uuidv4(), name: "13:00 a 15:00" },
        {id: uuidv4(), name: "17:00 a 19:00" },
        {id: uuidv4(), name: "19:00 a 21:00" },
        {id: uuidv4(), name: "21:00 a 22:00" },

    ]

    // state

    const [hours, setHours] = useState(optionsData)

    const addOptions = (hour) => {
        hour.id = uuidv4()
        setHours =([
            ...hours, 
        ])

    }


    const [selectedDate, setSelectedDate] = React.useState(false);

    const handleChange = () => {
      setSelectedDate(true);
    };
 


  const [value, setValue] = React.useState(new Date(false));

 const saveVisit= (id) => {
     console.log(id);
     setValue(true)

 }


const [confirm, setConfirm] = useState(false);

 const confirmVisit = () => {
     setConfirm(true)
    // props.history.push("/confirm");
 }

// const [value, setValue] = useState("");

//  selectHour = (valor) => {
//      setValue()

//  }





  return (
    <Fragment>

    
      <Grid continer>

          <table>
              <thead>
                  <th>HORARIOS</th>
              </thead>
              <tbody>
                  {


                      hours.map(cita => (
                        <tr key={cita.id}>
                        <td  disable onClick={() =>{saveVisit(cita.id)}}>
                            <option>{cita.name} </option>
                            
                        </td>
                        <td>
  
                        </td>
                    </tr>

                      ))

                  }
                  
              </tbody>
          </table>

          {/* <Button onChange={handleChange} value={value}>HOla</Button> */}
          
        {/* <div  onChange={handleChange} value={value} item>
          7:00 a 9:00
        </div>
        <div  onChange={handleChange} value={value} item>
          9:00 a 11:00
        </div>
        <div  onChange={handleChange} value={value} item>
          11:00 a 13:00
        </div>
        <div onChange={handleChange} value={value} item>
          13:00 a 15:00
        </div>
        <div  onChange={handleChange} value={value} item>
          15:00 a 17:00
        </div>
        <div  onChange={handleChange} value={value} item>
          17:00 a 19:00
        </div>
        <div onChange={handleChange} value={value} item>
          19:00 a 21:00
        </div> */}


        <div>

            {
                confirm ?  (
                    {saveVisit}

                ) : (
                   null


                )
            }

        <Button
        onClick={confirmVisit}
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          Continuar
        </Button>


        </div>

       

      </Grid>
    </Fragment>
  );
};

export default Hours;
