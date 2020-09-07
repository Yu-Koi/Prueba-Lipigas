import React, { useState, Fragment } from "react";
import Hours from "../Components/Hours";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, Input, FormControl, FormLabel, FormHelperText, Form } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  disponible: {
    color: "#00000",
  },
  noDisponible: {
    color: "#2204",
  },
});

const GetApi = () => {
  const classes = useStyles();

  const [rangeOne, setRangeOne] = useState([]);
  const [rangeTwo, setRangeTwo] = useState([]);
  const [rangeThree, setRangeThree] = useState([]);
  const [rangeFour, setRangeFour] = useState([]);
  const [rangeFive, setRangeFive] = useState([]);
  const [rangeSix, setRangeSix] = useState([]);
  const [rangeSeven, setRangeSeven] = useState([]);

  // const [scheduledTime, setScheduledTime] = React.useState([]);

  React.useEffect(() => {
    console.log("useEffect");
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "http://5f4928b88e271c001650c73d.mockapi.io/AGENDAMIENTO/CONSULTARDISPONIBILIDAD"
    );
    const hoursAvailable = await data.json();
    console.log(hoursAvailable);

    const disponibilidad = {
      uno: hoursAvailable.sevenToNine,
      dos: hoursAvailable.nineToEleven,
      tres: hoursAvailable.elevenToThirteen,
      cuatro: hoursAvailable.thirteenToFifteen,
      cinco: hoursAvailable.fifteenToSeventenn,
      seis: hoursAvailable.seventeenToNineteen,
      siete: hoursAvailable.nineteenToTwentyone,
    };

    // - 07:00 - 09:00
    if (hoursAvailable.sevenToNine) console.log("[DISPONIBLE] : 07:00 a 09:00");
    else console.log("[NO DISPONIBLE] : 07:00 a 09:00");

    // - 09:00 - 11:00
    if (hoursAvailable.nineToEleven)
      console.log("[DISPONIBLE] : 09:00 a 11:00");
    else console.log("[NO DISPONIBLE] : 09:00 a 11:00");

    // - 11:00 - 13:00
    if (hoursAvailable.elevenToThirteen)
      console.log("[DISPONIBLE] : 11:00 a 13:00");
    else console.log("[NO DISPONIBLE] : 11:00 a 13:00");

    // - 13:00 - 15:00
    if (hoursAvailable.thirteenToFifteen)
      console.log("[DISPONIBLE] : 13:00 a 15:00");
    else console.log("[NO DISPONIBLE] : 13:00 a 15:00");

    // - 15:00 - 17:00
    if (hoursAvailable.fifteenToSeventenn)
      console.log("[DISPONIBLE] : 15:00 a 17:00");
    else console.log("[NO DISPONIBLE] : 15:00 a 17:00");

    // 17:00 - 19:00
    if (hoursAvailable.seventeenToNineteen)
      console.log("[DISPONIBLE] : 17:00 a 19:00");
    else console.log("[NO DISPONIBLE] : 17:00 a 19:00");

    // 19:00 - 21:00
    if (hoursAvailable.nineteenToTwentyone)
      console.log("[DISPONIBLE] : 19:00 a 21:00");
    else console.log("[NO DISPONIBLE] :19:00 a 21:00");

    setRangeOne(hoursAvailable.sevenToNine);
    setRangeTwo(hoursAvailable.nineToEleven);
    setRangeThree(hoursAvailable.elevenToThirteen);
    setRangeFour(hoursAvailable.thirteenToFifteen);
    setRangeFive(hoursAvailable.fifteenToSeventenn);
    setRangeSix(hoursAvailable.seventeenToNineteen);
    setRangeSeven(hoursAvailable.nineteenToTwentyone);
  };

  const selectedHour = value => {
    console.log('SELECCIONADO');

}

  return (
    <Fragment>
      <h3>SEELECCION DE OPCIONES</h3>

     

      <Button onClick={selectedHour}>Default</Button>

     

   

      

     

    





  

      
      
        
       
     

      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {rangeOne ? (
              <TableRow className={classes.disponible}>7:00 a 09:00</TableRow>
            ) : (
              <TableRow className={classes.noDisponible}>7:00 a 09:00</TableRow>
            )}

            {rangeTwo ? (
              <TableRow className={classes.disponible}>9:00 a 11:00</TableRow>
            ) : (
              <TableRow className={classes.noDisponible}>9:00 a 11:00</TableRow>
            )}

            {rangeThree ? (
              <TableRow className={classes.disponible}>9:00 a 11:00</TableRow>
            ) : (
              <TableRow className={classes.noDisponible}>9:00 a 11:00</TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <li>{rangeOne ? "disponible" : "no disponible"}</li>

      <li>{rangeTwo ? "disponible" : "no disponible"}</li>

      <li>{rangeThree ? "disponible" : "no disponible"}</li>

      <li>{rangeFour ? "disponible" : "no disponible"}</li>

      <li>{rangeFive ? "disponible" : "no disponible"}</li>

      <li>{rangeSix ? "disponible" : "no disponible"}</li>

      <li>{rangeSeven ? "disponible" : "no disponible"}</li>

      <div></div>

      {/* <ul>
        {
          //  (calendar.stats != null && calendar.stats.length > 0)
          //  ?
          calendar.map((item, index) => (
            <li key={index}>
              <ul>{sevenToNine}</ul>
            </li>
          ))
          // :
          // (<li>no existen datos</li>)
        }
      </ul> */}
    </Fragment>
  );
};

export default GetApi;
