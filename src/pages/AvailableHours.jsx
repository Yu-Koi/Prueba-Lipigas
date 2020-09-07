import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Container } from "@material-ui/core";
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

  // const [value, setValue] = useState('')
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

  const createVisit = (cita) => {
    console.log(cita);
    saveVisit([...visit, visit]);

    props.history.push("/confirm");
  };

  return (
    <Fragment>
      <Container>
        <Header />
        <Grid container className={classes.root}>
          <form onSubmit={createVisit}>
            <Grid item xs={12}>
              {rangeOne ? (
                <Button
                  value={value}
                  index={0}
                  name="uno"
                  onChange={handleChange}
                  onClick={handleClick}
                  className={classes.selected}
                  id="1"
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
                  value={value}
                  index={1}
                  name="dos"
                  selected={selectHour}
                  onChange={handleChange}
                  onClick={handleClick}
                  id="2"
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
                  name="tres"
                  selected={selectHour}
                  onChange={handleChange}
                  onClick={handleClick}
                  value="11:00 a 13:00"
                  id="3"
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
                  onChange={handleChange}
                  onClick={handleClick}
                  value="13:00 a 15:00"
                  id="4"
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
                  onChange={handleChange}
                  onClick={handleClick}
                  value="15:00 a 17:00"
                  id="5"
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
                  index={5}
                  onChange={handleChange}
                  onClick={handleClick}
                  id="6"
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
                  index={6}
                  onChange={handleChange}
                  onClick={handleClick}
                  id="7"
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
