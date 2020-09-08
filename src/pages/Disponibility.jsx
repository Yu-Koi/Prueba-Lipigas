import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Container, Input } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "../Components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    display: "flex",
    flexDirection: "colum",
    alignItems: "center",
    marginTop: "2rem",
  },
  conatiner: {
    margin: theme.spacing(8, 0, 4),
    display: "flex",
    textAlign: "center",
    flexGrow: 1,
  },
  submit: {
    width: "100%",
    margin: theme.spacing(6, 0, 2),
    backgroundColor: "#002ab3",
    height: "2rem",
    flexGrow: 1,
    display: "flex",
    alignContent: "flex-end",
  },
  option: {
    hover: "#2204",
  },
}));

const AvailableHours = (props) => {
  const classes = useStyles();

  const [rangeOne, setRangeOne] = useState([]);
  const [rangeTwo, setRangeTwo] = useState([]);
  const [rangeThree, setRangeThree] = useState([]);
  const [rangeFour, setRangeFour] = useState([]);
  const [rangeFive, setRangeFive] = useState([]);
  const [rangeSix, setRangeSix] = useState([]);
  const [rangeSeven, setRangeSeven] = useState([]);

  const [options, setOptions] = useState([true]);

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

    setRangeOne(hoursAvailable.sevenToNine);
    setRangeTwo(hoursAvailable.nineToEleven);
    setRangeThree(hoursAvailable.elevenToThirteen);
    setRangeFour(hoursAvailable.thirteenToFifteen);
    setRangeFive(hoursAvailable.fifteenToSeventenn);
    setRangeSix(hoursAvailable.seventeenToNineteen);
    setRangeSeven(hoursAvailable.nineteenToTwentyone);
  };

  const [selectHour, setSelectHour] = useState(true);

  const handleClick = () => {
    console.log();
    console.log("SELECCIONADO");
    setSelectHour(false);
  };

  //Stado de

  const [value, setValue] = React.useState({
    name: "",
    id: "",
  });

  const handleChange = (e) => {
    console.log(e);
    setValue({
      ...value,
      [e.target.index]: e.target.name,
    });
  };

  const saveVisit = (e) => {
    e.preventDefault();
  };

  // Asignar un ID
  value.id = uuidv4();
  console.log(value);

  //Crear la Cita
  const [visit, setVisit] = useState([]);

  const createVisit = (visit) => {
    console.log(visit);
    saveVisit([...visit, visit]);

    props.history.push("/confirm");
  };

  // const optionsData = [
  //   { id: uuidv4(), name: "7:00 a 9:00" },
  //   { id: uuidv4(), name: "9:00 a 11:00" },
  //   { id: uuidv4(), name: "11:00 a 13:00" },
  //   { id: uuidv4(), name: "13:00 a 15:00" },
  //   { id: uuidv4(), name: "17:00 a 19:00" },
  //   { id: uuidv4(), name: "19:00 a 21:00" },
  //   { id: uuidv4(), name: "21:00 a 22:00" },
  // ];

  // const [hours, setHours] = useState('')

  // const getHours = (e) => {
  //   console.log(hours)
  //   e.preventDefault();
  //   hours.id = uuidv4();
  //   setHours = [...hours];

  // }

  return (
    <Fragment>
      <Container className={classes.container}>
        <Header />
        <Grid container className={classes.root}>
          <form onSubmit={handleClick}>
            <Grid item xs={12}>
              {rangeOne ? (
                <Button
                  value={value}
                  index={0}
                  name="uno"
                  onClick={handleChange}
                  
                >
                  7:00 a 09:00
                </Button>
              ) : (
                <Button disabled>7:00 a 09:00</Button>
              )}
            </Grid>

            <Grid item xs={12}>
              {rangeTwo ? (
                <Button
                  value="segundo"
                  index={1}
                  name="uno"
                  onClick={handleChange}
                  
                >
                  09:00 a 11:00
                </Button>
              ) : (
                <Button disabled>09:00 a 11:00</Button>
              )}
            </Grid>

            <Grid item xs={12}>
              {rangeThree ? (
                <Button
                  value={value}
                  index={2}
                  name="11:00-13:00"
                  onClick={handleChange}
                  value="11:00 a 13:00"
                  
                >
                  11:00 a 13:00
                </Button>
              ) : (
                <Button disabled>11:00 a 13:00</Button>
              )}
            </Grid>

            <Grid item xs={12}>
              {rangeFour ? (
                <Button
                  value={value}
                  index={3}
                  name="13:00-15:00"
                  onClick={handleChange}
                  value="13:00 a 15:00"
                 
                >
                  13:00 a 15:00
                </Button>
              ) : (
                <Button disabled>13:00 a 15:00</Button>
              )}
            </Grid>

            <Grid item xs={12}>
              {rangeFive ? (
                <Button
                  value={value}
                  name="15:00-17:00"
                  onClick={handleChange}
                  
                >
                  15:00 a 17:00
                </Button>
              ) : (
                <Button disabled>15:00 a 17:00</Button>
              )}
            </Grid>

            <Grid item xs={12}>
              {rangeSix ? (
                <Button
                  value={value}
                  name="17:00-19:00"
                  index={5}
                  onClick={handleChange}
                 
                >
                  17:00 a 19:00
                </Button>
              ) : (
                <Button disabled>17:00 a 19:00</Button>
              )}
            </Grid>

            <Grid item xs={12}>
              {rangeSeven ? (
                <Button
                  value={value}
                  name="19:00-21:00"
                  index={6}
                  onClick={handleChange}
                  
                >
                  19:00 a 21:00
                </Button>
              ) : (
                <Button disabled>19:00 a 21:00</Button>
              )}
            </Grid>

            <Button
              type="submit"
              className={classes.submit}
              variant="contained"
              color="primary"
              disableElevation
            >
              Continuar
            </Button>
          </form>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default withRouter(AvailableHours);
